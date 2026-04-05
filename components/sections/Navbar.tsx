"use client";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full py-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={84}
              height={31}
              className="dark:invert-0 invert"
            />
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Overview
            </a>
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Curriculum
            </a>
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-6">
            {/* Theme Toggle */}
            <ThemeToggle />

            <Button variant="primary" className="hidden sm:flex">
              Enroll now
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
