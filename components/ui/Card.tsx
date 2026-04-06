import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl p-6 border border-white/10",
        "hover:border-primary/40 hover:scale-[1.03]",
        "transition-all duration-300",
        className as string,
      )}
    >
      {children}
    </div>
  );
}
