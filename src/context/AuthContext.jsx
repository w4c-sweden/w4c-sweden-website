import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem("w4c_session");
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  const persistSession = (profile) => {
    const minimalUser = {
      firstName: profile.firstName,
      isAuthenticated: true,
    };
    sessionStorage.setItem("w4c_session", JSON.stringify(minimalUser));
    setUser(minimalUser);
  };

  const login = async (email) => {
    const profile = await authService.loginWithEmail(email);
    persistSession(profile);
  };

  const register = async ({ firstName, email }) => {
    const profile = await authService.registerMember({ firstName, email });
    persistSession(profile);
  };

  const logout = () => {
    sessionStorage.removeItem("w4c_session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
