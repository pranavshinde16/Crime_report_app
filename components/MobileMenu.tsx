import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "./logo_new.png";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-64 bg-zinc-900 p-6 shadow-xl z-50"
          >
            <div className="flex flex-col space-y-6">
              {/* Close Icon Div */}
              <div className="flex justify-between items-center">
                <div className="flex justify-start items-center">
                  <Link href="/" className="flex items-center gap-1.3 cursor-default">
                    <div className="h-8 w-9 bg-gradient-to-br to-blue-600 flex items-center justify-start rounded-xl cursor-default">
                      <Image
                        src={Logo}
                        alt="Logo"
                        width={24}
                        height={24}
                        className="h-7 w-7"
                      />
                    </div>
                    <span className="text-sm font-semibold text-wrap text-white cursor-default">
                      Safe Report
                    </span>
                  </Link>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-zinc-400 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* NavItems */}
              <nav className="flex flex-col space-y-4">
                {[
                  { href: "/submit-report", label: "Submit Report" },
                  { href: "/track-report", label: "Track Report" },
                  { href: "/how-it-works", label: "How It Works" },
                  { href: "/resources", label: "Resources" },
                  { href: "/contact", label: "Contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 * index,
                      type: "tween",
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
