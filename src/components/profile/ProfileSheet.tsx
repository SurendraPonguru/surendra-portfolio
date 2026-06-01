import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Camera,
  Pencil,
  Check,
  RotateCcw,
  Mail,
  Phone,
  MapPin,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useProfileSettings, type ProfileSettings } from "@/context/ProfileSettingsContext";

function normalizeDraft(draft: ProfileSettings, fallback: ProfileSettings): ProfileSettings {
  return {
    avatarUrl: draft.avatarUrl || fallback.avatarUrl,
    name: draft.name.trim() || fallback.name,
    about: draft.about.trim(),
    domain: draft.domain.trim() || fallback.domain,
    phone: draft.phone.trim() || fallback.phone,
    email: draft.email.trim() || fallback.email,
    address: draft.address.trim() || fallback.address,
  };
}

export default function ProfileSheet() {
  const {
    headerProfile,
    syncToPages,
    isProfileOpen,
    closeProfile,
    saveProfile,
    setAvatarFromFile,
    setSyncToPages,
    resetProfile,
  } = useProfileSettings();

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(headerProfile);
  const [showSyncPrompt, setShowSyncPrompt] = useState(false);
  const [pendingSave, setPendingSave] = useState<ProfileSettings | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isProfileOpen) {
      setDraft(headerProfile);
      setIsEditing(false);
      setShowSyncPrompt(false);
      setPendingSave(null);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isProfileOpen, headerProfile]);

  useEffect(() => {
    if (!isProfileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !showSyncPrompt) {
        if (isEditing) {
          setDraft(headerProfile);
          setIsEditing(false);
        } else {
          closeProfile();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isProfileOpen, isEditing, headerProfile, closeProfile, showSyncPrompt]);

  const startEditing = () => {
    setDraft(headerProfile);
    setIsEditing(true);
  };

  const requestSave = () => {
    const normalized = normalizeDraft(draft, headerProfile);
    setPendingSave(normalized);
    setShowSyncPrompt(true);
  };

  const confirmSave = (applyToPages: boolean) => {
    if (pendingSave) {
      saveProfile(pendingSave, applyToPages);
    }
    setPendingSave(null);
    setShowSyncPrompt(false);
    setIsEditing(false);
  };

  const cancelEdits = () => {
    setDraft(headerProfile);
    setIsEditing(false);
  };

  const handlePhotoClick = () => {
    if (isEditing) fileInputRef.current?.click();
  };

  const display = isEditing ? draft : headerProfile;

  return (
    <>
      <AnimatePresence>
        {isProfileOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Profile"
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeProfile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative flex flex-col w-full max-w-lg mx-auto h-full sm:h-[92vh] sm:my-auto sm:rounded-2xl overflow-hidden bg-background shadow-2xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-3 py-3 bg-primary text-primary-foreground shrink-0">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={isEditing ? cancelEdits : closeProfile}
                  className="rounded-full text-primary-foreground hover:bg-white/15 h-10 w-10"
                  aria-label="Back"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <span className="font-semibold text-lg flex-1">Profile</span>
                {isEditing ? (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={requestSave}
                    className="rounded-full text-primary-foreground hover:bg-white/15 font-semibold"
                  >
                    <Check className="h-5 w-5 mr-1" />
                    Done
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={startEditing}
                    className="rounded-full text-primary-foreground hover:bg-white/15 font-semibold"
                  >
                    <Pencil className="h-4 w-4 mr-1.5" />
                    Edit
                  </Button>
                )}
              </div>

              <div className="bg-primary/90 dark:bg-primary/80 px-6 pt-2 pb-16 shrink-0">
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={handlePhotoClick}
                    disabled={!isEditing}
                    className={`relative group ${isEditing ? "cursor-pointer" : "cursor-default"}`}
                    aria-label={isEditing ? "Change profile photo" : "Profile photo"}
                  >
                    <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white/30 shadow-xl">
                      <img
                        src={display.avatarUrl}
                        alt={display.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    {isEditing && (
                      <span className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center shadow-lg border border-border">
                        <Camera className="h-5 w-5" />
                      </span>
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        void setAvatarFromFile(file).then((url) => {
                          if (url) setDraft((d) => ({ ...d, avatarUrl: url }));
                        });
                      }
                      e.target.value = "";
                    }}
                  />
                  {isEditing && (
                    <p className="text-xs text-primary-foreground/80 mt-3">
                      Tap photo to change (header)
                    </p>
                  )}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto -mt-10 px-4 pb-8">
                {!isEditing && (
                  <div className="bg-muted/50 rounded-xl border border-border p-4 mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-start gap-3 min-w-0">
                      <Home className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <Label htmlFor="sync-pages" className="text-sm font-medium cursor-pointer">
                          Show on Home & About
                        </Label>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {syncToPages
                            ? "Pages use this profile"
                            : "Pages use original site content"}
                        </p>
                      </div>
                    </div>
                    <Switch
                      id="sync-pages"
                      checked={syncToPages}
                      onCheckedChange={setSyncToPages}
                    />
                  </div>
                )}

                <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
                  <div className="px-4 py-4 border-b border-border">
                    <p className="text-xs text-muted-foreground mb-1">Name</p>
                    {isEditing ? (
                      <Input
                        value={draft.name}
                        onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                        className="font-semibold text-lg border-0 px-0 h-auto focus-visible:ring-0 shadow-none"
                        placeholder="Your name"
                      />
                    ) : (
                      <p className="font-semibold text-lg">{headerProfile.name}</p>
                    )}
                  </div>

                  <div className="px-4 py-4 border-b border-border">
                    <p className="text-xs text-muted-foreground mb-1">About</p>
                    {isEditing ? (
                      <Textarea
                        value={draft.about}
                        onChange={(e) => setDraft((d) => ({ ...d, about: e.target.value }))}
                        className="min-h-[80px] border-0 px-0 resize-none focus-visible:ring-0 shadow-none text-sm"
                        placeholder="Tell visitors about yourself..."
                      />
                    ) : (
                      <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
                        {headerProfile.about || "Hey there! I am using this portfolio."}
                      </p>
                    )}
                  </div>

                  <div className="px-4 py-4 border-b border-border">
                    <p className="text-xs text-muted-foreground mb-1">Title</p>
                    {isEditing ? (
                      <Input
                        value={draft.domain}
                        onChange={(e) => setDraft((d) => ({ ...d, domain: e.target.value }))}
                        className="text-sm border-0 px-0 h-auto focus-visible:ring-0 shadow-none"
                        placeholder="e.g. Frontend Developer"
                      />
                    ) : (
                      <p className="text-sm font-medium text-primary">{headerProfile.domain}</p>
                    )}
                  </div>

                  <div className="divide-y divide-border">
                    <ProfileRow
                      icon={<Phone className="h-4 w-4" />}
                      label="Phone"
                      value={display.phone}
                      editing={isEditing}
                      onChange={(v) => setDraft((d) => ({ ...d, phone: v }))}
                    />
                    <ProfileRow
                      icon={<Mail className="h-4 w-4" />}
                      label="Email"
                      value={display.email}
                      editing={isEditing}
                      onChange={(v) => setDraft((d) => ({ ...d, email: v }))}
                    />
                    <ProfileRow
                      icon={<MapPin className="h-4 w-4" />}
                      label="Location"
                      value={display.address}
                      editing={isEditing}
                      onChange={(v) => setDraft((d) => ({ ...d, address: v }))}
                    />
                  </div>
                </div>

                {isEditing && (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full mt-4 rounded-xl text-muted-foreground"
                    onClick={() => {
                      if (confirm("Reset header profile to defaults?")) {
                        resetProfile();
                        setIsEditing(false);
                      }
                    }}
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset to defaults
                  </Button>
                )}

                <p className="text-center text-xs text-muted-foreground mt-4 px-2">
                  Header profile is always saved here. Home & About update only when you choose to sync.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AlertDialog
        open={showSyncPrompt}
        onOpenChange={(open) => {
          setShowSyncPrompt(open);
          if (!open) setPendingSave(null);
        }}
      >
        <AlertDialogContent className="z-[250] max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Update Home & About pages?</AlertDialogTitle>
            <AlertDialogDescription>
              Your changes can apply to the header only, or also update the Home and About sections
              (name, photo, about text, and contact details).
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <AlertDialogCancel
              className="mt-0"
              onClick={() => confirmSave(false)}
            >
              Header only
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => confirmSave(true)}>
              Yes, update pages
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function ProfileRow({
  icon,
  label,
  value,
  editing,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  editing: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-start gap-3 px-4 py-3">
      <span className="text-muted-foreground mt-0.5 shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        {editing ? (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mt-0.5 border-0 px-0 h-auto text-sm focus-visible:ring-0 shadow-none"
          />
        ) : (
          <p className="text-sm break-all">{value}</p>
        )}
      </div>
    </div>
  );
}
