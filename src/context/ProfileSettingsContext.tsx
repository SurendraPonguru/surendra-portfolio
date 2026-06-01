import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ProfileDetails } from "@/assests/context";

const STORAGE_KEY = "portfolio-profile-settings";

export const DEFAULT_AVATAR = "/images/32e785d4-d1ae-4c9a-a15b-3475263700e6.png";
export const DEFAULT_HERO_AVATAR = "/images/ebc6f922-f187-4c31-909d-3012ff5fb66b.png";

export interface ProfileSettings {
  avatarUrl: string;
  name: string;
  about: string;
  domain: string;
  phone: string;
  email: string;
  address: string;
}

export const siteDefaults: ProfileSettings = {
  avatarUrl: DEFAULT_HERO_AVATAR,
  name: ProfileDetails.name,
  about: ProfileDetails.about,
  domain: ProfileDetails.domain,
  phone: ProfileDetails.phoneNumber,
  email: ProfileDetails.email,
  address: ProfileDetails.address,
};

const headerDefaults: ProfileSettings = {
  avatarUrl: DEFAULT_AVATAR,
  name: ProfileDetails.name,
  about: ProfileDetails.about,
  domain: ProfileDetails.domain,
  phone: ProfileDetails.phoneNumber,
  email: ProfileDetails.email,
  address: ProfileDetails.address,
};

interface StoredProfileData {
  header: ProfileSettings;
  syncToPages: boolean;
}

function loadStored(): StoredProfileData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { header: headerDefaults, syncToPages: false };
    }
    const parsed = JSON.parse(raw);
    if (parsed.header) {
      return {
        header: { ...headerDefaults, ...parsed.header },
        syncToPages: Boolean(parsed.syncToPages),
      };
    }
    return {
      header: { ...headerDefaults, ...parsed },
      syncToPages: false,
    };
  } catch {
    return { header: headerDefaults, syncToPages: false };
  }
}

type ProfileSettingsContextValue = {
  /** Shown in header only */
  headerProfile: ProfileSettings;
  /** Shown on Home & About — site defaults unless sync is on */
  pageProfile: ProfileSettings;
  syncToPages: boolean;
  isProfileOpen: boolean;
  openProfile: () => void;
  closeProfile: () => void;
  saveProfile: (patch: ProfileSettings, applyToPages: boolean) => void;
  setAvatarFromFile: (file: File) => Promise<string | null>;
  setSyncToPages: (value: boolean) => void;
  resetProfile: () => void;
};

const ProfileSettingsContext = createContext<ProfileSettingsContextValue | null>(null);

export function ProfileSettingsProvider({ children }: { children: ReactNode }) {
  const [headerProfile, setHeaderProfile] = useState<ProfileSettings>(headerDefaults);
  const [syncToPages, setSyncToPagesState] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = loadStored();
    setHeaderProfile(stored.header);
    setSyncToPagesState(stored.syncToPages);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const data: StoredProfileData = { header: headerProfile, syncToPages };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [headerProfile, syncToPages, hydrated]);

  const pageProfile = syncToPages ? headerProfile : siteDefaults;

  const openProfile = useCallback(() => setIsProfileOpen(true), []);
  const closeProfile = useCallback(() => setIsProfileOpen(false), []);

  const saveProfile = useCallback((patch: ProfileSettings, applyToPages: boolean) => {
    setHeaderProfile(patch);
    setSyncToPagesState(applyToPages);
  }, []);

  const setSyncToPages = useCallback((value: boolean) => {
    setSyncToPagesState(value);
  }, []);

  const setAvatarFromFile = useCallback(async (file: File): Promise<string | null> => {
    if (!file.type.startsWith("image/")) return null;
    const maxSize = 4 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("Please choose an image under 4MB.");
      return null;
    }
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    setHeaderProfile((prev) => ({ ...prev, avatarUrl: dataUrl }));
    return dataUrl;
  }, []);

  const resetProfile = useCallback(() => {
    setHeaderProfile(headerDefaults);
    setSyncToPagesState(false);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = useMemo(
    () => ({
      headerProfile,
      pageProfile,
      syncToPages,
      isProfileOpen,
      openProfile,
      closeProfile,
      saveProfile,
      setAvatarFromFile,
      setSyncToPages,
      resetProfile,
    }),
    [
      headerProfile,
      pageProfile,
      syncToPages,
      isProfileOpen,
      openProfile,
      closeProfile,
      saveProfile,
      setAvatarFromFile,
      setSyncToPages,
      resetProfile,
    ]
  );

  return (
    <ProfileSettingsContext.Provider value={value}>
      {children}
    </ProfileSettingsContext.Provider>
  );
}

export function useProfileSettings() {
  const ctx = useContext(ProfileSettingsContext);
  if (!ctx) {
    throw new Error("useProfileSettings must be used within ProfileSettingsProvider");
  }
  return ctx;
}

/** For Home, About, Contact sections */
export function usePageProfile() {
  const { pageProfile } = useProfileSettings();
  return pageProfile;
}
