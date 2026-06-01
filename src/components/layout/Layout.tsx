
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ProfileSettingsProvider } from "@/context/ProfileSettingsContext";
import PageAmbient from "@/components/animations/PageAmbient";
import ProfileSheet from "@/components/profile/ProfileSheet";

export default function Layout() {
  return (
    <ThemeProvider>
      <ProfileSettingsProvider>
        <PageAmbient />
        <ProfileSheet />
        <div className="flex flex-col min-h-screen relative">
          <Header />
          <main className="flex-grow pt-20 sm:pt-24 transition-all duration-300">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ProfileSettingsProvider>
    </ThemeProvider>
  );
}
