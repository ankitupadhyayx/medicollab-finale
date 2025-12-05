import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User, UserRole } from "../types";
import { DEFAULT_USER } from "../constants";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getNameByRole = (role: UserRole) => {
    switch (role) {
      case UserRole.HOSPITAL:
        return "City General Hospital";
      case UserRole.ADMIN:
        return "System Admin";
      default:
        return "Alex Doe";
    }
  };

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("medicollab_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Invalid user data in localStorage");
      localStorage.removeItem("medicollab_user");
    }
    setIsLoading(false);
  }, []);

  const login = (role: UserRole) => {
    const newUser: User = {
      ...DEFAULT_USER,
      role,
      name: getNameByRole(role),
      avatar:
        role === UserRole.HOSPITAL
          ? "https://picsum.photos/100/100?random=60"
          : DEFAULT_USER.avatar
    };

    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem("medicollab_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("medicollab_user");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
