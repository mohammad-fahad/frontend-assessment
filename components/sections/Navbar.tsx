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
          <div className="flex items-center gap-2">
            <Image
              src="/assets/Logo.png"
              alt="logo"
              width={84}
              height={31}
              className="dark:invert-0 invert"
            />
          </div>

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
            <ThemeToggle />

            <Button variant="primary" className="hidden md:flex">
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
      <div className="absolute top-16 md:top-20 left-0 right-0 h-1/22  bg-gradient-to-r from-transparent via-blue-500 to-transparent z-10" />
    </header>
  );
}
