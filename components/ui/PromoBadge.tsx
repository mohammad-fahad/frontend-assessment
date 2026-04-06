"use client";
import React from "react";

export function PromoBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center group">
      <div
        className="absolute inset-0 rounded-2xl opacity-20 blur-[2px] transition-opacity group-hover:opacity-40"
        style={{
          background:
            "linear-gradient(90deg, rgba(36, 102, 242, 1) 0%, rgba(36, 102, 242, 0) 100%)",
        }}
      />

      <div className="relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/60 via-transparent to-blue-500/60">
        <div className="relative flex items-center gap-2.5 px-4 py-1.5 rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-2xl bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-2xl h-2 w-2 bg-[#2466F2]"></span>
          </span>

          <span className="text-[12px] md:text-lg font-normal text-[#E5E7EB] tracking-wide whitespace-nowrap">
            {children}
          </span>
        </div>
      </div>
    </div>
  );
}
