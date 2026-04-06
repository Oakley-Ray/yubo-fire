import { ShieldIcon, WrenchIcon, PackageIcon, ClipboardCheckIcon } from "./icons";

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative w-full aspect-square">
        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-full bg-amber/5 blur-3xl scale-75" />

        {/* Outer ring */}
        <div className="absolute inset-4 rounded-full border border-white/[0.06]" />

        {/* Middle ring with dashes */}
        <div className="absolute inset-12 rounded-full border border-dashed border-amber/15" />

        {/* Inner ring */}
        <div className="absolute inset-20 rounded-full border border-white/[0.04]" />

        {/* Center shield */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center backdrop-blur-sm">
            <ShieldIcon className="w-9 h-9 text-amber" />
          </div>
        </div>

        {/* Floating icon - top */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center backdrop-blur-sm">
            <ClipboardCheckIcon className="w-5 h-5 text-slate-400" />
          </div>
          <div className="mx-auto mt-2 w-px h-10 bg-gradient-to-b from-amber/20 to-transparent" />
        </div>

        {/* Floating icon - right */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          <div className="w-px h-0 sm:h-10 bg-gradient-to-r from-transparent via-amber/20 to-transparent rotate-90 mr-2 hidden sm:block" />
          <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center backdrop-blur-sm">
            <WrenchIcon className="w-5 h-5 text-slate-400" />
          </div>
        </div>

        {/* Floating icon - bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="mx-auto mb-2 w-px h-10 bg-gradient-to-t from-amber/20 to-transparent" />
          <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center backdrop-blur-sm">
            <PackageIcon className="w-5 h-5 text-slate-400" />
          </div>
        </div>

        {/* Floating icon - left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
          <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center backdrop-blur-sm">
            <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute top-16 right-16 w-1.5 h-1.5 rounded-full bg-amber/40" />
        <div className="absolute bottom-20 left-14 w-1 h-1 rounded-full bg-amber/30" />
        <div className="absolute top-28 left-20 w-1 h-1 rounded-full bg-white/10" />
        <div className="absolute bottom-28 right-20 w-1.5 h-1.5 rounded-full bg-white/10" />

        {/* Connecting lines (subtle) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
          <line x1="200" y1="80" x2="200" y2="150" stroke="rgba(200,145,46,0.12)" strokeWidth="1" />
          <line x1="200" y1="250" x2="200" y2="320" stroke="rgba(200,145,46,0.12)" strokeWidth="1" />
          <line x1="80" y1="200" x2="150" y2="200" stroke="rgba(200,145,46,0.12)" strokeWidth="1" />
          <line x1="250" y1="200" x2="320" y2="200" stroke="rgba(200,145,46,0.12)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
