export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[90vw] mx-auto px-4 md:px-6">{children}</div>;
}
