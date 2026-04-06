export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] font-semibold tracking-tight">
      {children}
    </h1>
  );
}

export function SubText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] md:text-[18px] leading-[1.6] text-muted text-gray-300">
      {children}
    </p>
  );
}
