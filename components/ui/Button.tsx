"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-xl font-medium transition-all active:scale-95 disabled:opacity-50 cursor-pointer",
        variant === "primary"
          ? "bg-blue-600 text-white hover:shadow-[rgba(36, 102, 242, 1)]"
          : "",
        variant === "secondary"
          ? "bg-white text-black border border-gray-200 hover:bg-gray-50"
          : "",
        variant === "dark"
          ? "bg-[#171B21] text-white border border-[#2A2F37] hover:bg-[#1f242c]"
          : "",
      )}
      {...props}
    >
      {children}
    </button>
  );
}
