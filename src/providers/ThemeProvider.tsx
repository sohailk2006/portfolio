"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  const toggleTheme = () => {
    // Exclusively dark mode, no-op
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

