"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <div className="w-16 h-8 bg-gray-800 rounded-full animate-pulse" />;


  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");

    console.log("Toggle clicked");
    
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-16 h-8 p-1 transition-all duration-300 bg-gray-200 dark:bg-gray-800 border border-black/5 dark:border-white/10 rounded-full cursor-pointer overflow-hidden"
      aria-label="Toggle Theme"
    >
      {/* Sliding Circle */}
      <div
        className={`absolute z-10 w-6 h-6 bg-white dark:bg-zinc-100 rounded-full shadow-lg transform transition-transform duration-500 ease-in-out flex items-center justify-center ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon size={14} className="text-blue-600" />
        ) : (
          <Sun size={14} className="text-yellow-500" />
        )}
      </div>

      {/* Background Icons (Static) */}
      <div className="flex justify-between w-full px-1.5 pointer-events-none">
        <Sun size={14} className="text-yellow-500/60" />
        <Moon size={14} className="text-blue-400/60" />
      </div>
    </button>
  );
}
