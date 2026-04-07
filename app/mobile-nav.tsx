"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ShieldIcon,
  WrenchIcon,
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

function DrawerPortal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: "#000",
          transition: "opacity 300ms",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: open ? 0 : "-16rem",
          zIndex: 9999,
          height: "100dvh",
          width: "16rem",
          background: "#091e36",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,.25)",
          transition: "right 300ms ease-in-out",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="flex items-center gap-2">
            <ShieldIcon className="w-5 h-5 text-amber" />
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.875rem" }}>昱保消防</span>
          </div>
          <button
            onClick={onClose}
            style={{ color: "#94a3b8", padding: "4px" }}
            aria-label="關閉選單"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "1rem 0.75rem" }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-200 hover:bg-white/10 hover:text-amber transition-colors"
            >
              <item.icon className="w-5 h-5 text-slate-400" />
              <span style={{ fontWeight: 500, fontSize: "0.875rem" }}>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* CTA at bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a
            href="tel:0224345129"
            onClick={onClose}
            className="flex items-center justify-center gap-2 bg-amber hover:bg-amber-light font-semibold py-3 rounded-lg transition-colors text-sm"
            style={{ color: "#091e36", width: "100%" }}
          >
            <PhoneIcon className="w-4 h-4" />
            立即撥打
          </a>
        </div>
      </div>
    </>,
    document.body
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
      <button
        onClick={() => setOpen(true)}
        className="text-white p-1"
        aria-label="開啟選單"
      >
        <MenuIcon className="w-6 h-6" />
      </button>
      <DrawerPortal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
