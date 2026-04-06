"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShieldIcon,
  WrenchIcon,
  PackageIcon,
  ClipboardCheckIcon,
} from "./icons";

const services = [
  {
    icon: ClipboardCheckIcon,
    title: "消防安全檢修",
    description:
      "依法定期進行消防安全設備檢修申報，確保各類場所符合消防法規，保障人員安全。",
  },
  {
    icon: WrenchIcon,
    title: "消防改善工程",
    description:
      "針對消防缺失項目進行專業改善工程，從規劃設計到施工驗收，一條龍服務。",
  },
  {
    icon: ShieldIcon,
    title: "消防設備安裝",
    description:
      "各類消防安全設備安裝工程，包含火警自動警報、滅火設備、避難逃生設備等。",
  },
  {
    icon: PackageIcon,
    title: "消防器材買賣",
    description:
      "提供滅火器、偵煙探測器、緩降機、消防栓設備等各式消防器材銷售與諮詢。",
  },
];

export function ServiceCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Mobile: horizontal scroll snap */}
      <div className="sm:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 -mx-6 scrollbar-hide">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`snap-center shrink-0 w-[80vw] rounded-xl p-7 border transition-all duration-500 ${
                activeIndex === i
                  ? "bg-white border-amber/30 shadow-lg scale-[1.02]"
                  : "bg-white/60 border-slate-200 opacity-50 scale-[0.97]"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-500 ${
                  activeIndex === i ? "bg-amber/10" : "bg-navy/5"
                }`}
              >
                <service.icon
                  className={`w-6 h-6 transition-colors duration-500 ${
                    activeIndex === i ? "text-amber" : "text-navy"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-amber" : "w-1.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid layout */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-amber/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-navy/5 group-hover:bg-amber/10 rounded-lg flex items-center justify-center mb-5 transition-colors">
              <service.icon className="w-6 h-6 text-navy group-hover:text-amber transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {service.title}
            </h3>
            <p className="text-slate-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
