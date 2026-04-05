import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});

export const metadata = {
  title: "Frontend Assessment",
  description: "Landing page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`inter_78870104-module__pWJ_4W__variable ${inter.variable} scroll-smooth`}
      suppressHydrationWarning={true}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
