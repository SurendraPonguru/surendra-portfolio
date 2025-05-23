
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Layout() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-8 sm:pt-10 transition-all duration-300">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
