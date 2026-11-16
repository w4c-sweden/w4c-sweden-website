import { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import MemberDashboard from "./components/sections/MemberDashboard";
import Footer from "./components/sections/Footer";

export default function App() {
  const { user } = useAuth();
  const [activeView, setActiveView] = useState("home");

  // Switch automatically to member view on login, and back to home on logout
  useEffect(() => {
    if (user) {
      setActiveView("member");
    } else {
      setActiveView("home");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-bg-dark text-text-main flex flex-col text-left">
      <Navbar onNavigate={setActiveView} activeView={activeView} />
      <main className="flex-1">
        {user && activeView === "member" ? (
          <MemberDashboard onBackToHome={() => setActiveView("home")} />
        ) : (
          <>
            <Hero />
            <Features />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
