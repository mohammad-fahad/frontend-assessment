"use client";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchedLink = navLinks.find((link) => link.href === `#${id}`);
          if (matchedLink) {
            setActiveTab(matchedLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string,
  ) => {
    e.preventDefault();
    setActiveTab(name);
  };

  return (
    <header className="sticky top-0 z-50 w-full py-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2"
            onClick={() => setActiveTab("hero")}
          >
            <Image
              src="/assets/Logo.png"
              alt="logo"
              width={84}
              height={31}
              className="dark:invert-0 invert"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-3 lg:gap-8 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative pb-1 transition-colors duration-300 hover:text-black dark:hover:text-white
              ${isActive ? "text-black dark:text-white" : ""}
            `}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300
                ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
              `}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 text-center">
            <ThemeToggle />

            <Button
              variant="primary"
              className="hidden md:flex px-4 py-2 m-0 rounded-lg text-sm font-medium"
            >
              Enroll now
            </Button>

            <div className="md:hidden cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 dark:text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
    </header>
  );
}
