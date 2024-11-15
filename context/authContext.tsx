"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type TAuthContext = {
  userId: string | null;
  logIn: (userId: string) => void;
  logOut: () => void;
};

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const logIn = (userId: string) => setUserId(userId);
  const logOut = () => setUserId(null);

  return (
    <AuthContext.Provider value={{ userId, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
