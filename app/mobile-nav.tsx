"use client";

import { useState, useEffect } from "react";
import {
  ShieldIcon,
  WrenchIcon,
  PackageIcon,
  ClipboardCheckIcon,
  PhoneIcon,
  MapPinIcon,
} from "./icons";

const navItems = [
  { href: "#", label: "首頁", icon: ShieldIcon },
  { href: "#services", label: "服務項目", icon: WrenchIcon },
  { href: "#about", label: "關於我們", icon: ClipboardCheckIcon },
  { href: "#contact", label: "聯絡資訊", icon: MapPinIcon },
];

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="text-white p-1"
        aria-label="開啟選單"
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-navy-dark shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShieldIcon className="w-5 h-5 text-amber" />
            <span className="text-white font-bold text-sm">昱保消防</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-slate-400 hover:text-white p-1"
            aria-label="關閉選單"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-200 hover:bg-white/10 hover:text-amber transition-colors"
            >
              <item.icon className="w-5 h-5 text-slate-400" />
              <span className="font-medium text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* CTA at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <a
            href="tel:0224345129"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-amber hover:bg-amber-light text-navy-dark font-semibold w-full py-3 rounded-lg transition-colors text-sm"
          >
            <PhoneIcon className="w-4 h-4" />
            02-2434-5129
          </a>
        </div>
      </aside>
    </div>
  );
}
