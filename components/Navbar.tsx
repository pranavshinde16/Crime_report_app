"use client";
import Link from "next/link";
import { use, useState } from "react";
import Image from "next/image";
// import MobileMenu
import Logo from "./logo_new.png";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full border-b border-white/5 bg-black/60 z-40 ${
          isMobileMenuOpen ? "blur-sm" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Link href={"/"} className="flex items-center space-x-3">
                <div className="h-8 w-9 bg-gradient-to-br to-blue-600 flex items-center justify-center rounded-xl">
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={24}
                    height={24}
                    className="h-8 w-8"
                  />
                </div>
                <span className="sm:text-lg text-sm font-semibold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                  Safe Report
                </span>
              </Link>
            </div>

            {/* Main Navigationn - hidden on mobileVView and visible above md-768px */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/submit-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Submit Report
              </Link>
              <Link
                href="/track-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Track Report
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                How it works
              </Link>
                <Link
                  href="/submit-report"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Resources
                </Link>
            </div>

            {/* Emergenncy */}
            <div className="flex items-center space-x-4">
              <Link
                className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors"
                href="/contact"
              >
                Contact
              </Link>
              <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 text-sm font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20">
                <span className="h-1.5 w-1.5 rounded-full  bg-red-500 animate-pulse" />
                Emergency: 911
              </button>

              {/* Mobile Menu */}
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-zinc-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
