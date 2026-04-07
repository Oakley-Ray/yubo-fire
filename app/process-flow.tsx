"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  { step: "01", title: "來電諮詢", description: "說明場所類型與需求，我們初步評估服務項目與時程。" },
  { step: "02", title: "現場勘查", description: "專業人員到場勘查消防設備現況，了解整體環境與需求。" },
  { step: "03", title: "報價說明", description: "依據勘查結果提供詳細報價，費用透明無隱藏收費。" },
  { step: "04", title: "現場檢查申報", description: "實際進行消防設備檢查，並完成法定檢修申報作業。" },
  { step: "05", title: "安排施工改善", description: "針對檢查缺失項目，排定時程進行施工改善。" },
  { step: "06", title: "完工申報與改善", description: "改善工程完工後，協助完成複查申報，確保順利通過。" },
];

export function ProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });
  const [path, setPath] = useState("");

  useEffect(() => {
    function updatePath() {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      setSvgSize({ w: containerRect.width, h: containerRect.height });

      const points: { x: number; y: number }[] = [];
      circleRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        points.push({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        });
      });

      if (points.length < 6) return;

      // Row 1: 01 → 02 → 03
      let d = `M ${points[0].x} ${points[0].y}`;
      d += ` L ${points[1].x} ${points[1].y}`;
      d += ` L ${points[2].x} ${points[2].y}`;

      // 03 → 04: right side, extend out then arc down then back
      // Use the right padding area (container width - some margin)
      const arcX = containerRect.width - 16; // stay inside container
      const p3 = points[2]; // 03 circle
      const p4 = points[3]; // 04 circle (top-right of row 2)

      // Smooth U-turn from 03 to 04
      const midY = (p3.y + p4.y) / 2;
      const bulge = 30;
      // From 03 circle, curve out to the right and down to 04
      d += ` C ${arcX + bulge} ${p3.y}, ${arcX + bulge} ${p4.y}, ${p4.x} ${p4.y}`;

      // Row 2: 04 → 05 → 06
      d += ` L ${points[4].x} ${points[4].y}`;
      d += ` L ${points[5].x} ${points[5].y}`;

      setPath(d);
    }

    updatePath();
    window.addEventListener("resize", updatePath);
    const timer = setTimeout(updatePath, 150);
    return () => {
      window.removeEventListener("resize", updatePath);
      clearTimeout(timer);
    };
  }, []);

  const row1 = steps.slice(0, 3);
  // Row 2 displayed right to left: 04 on right, 06 on left
  const row2 = [steps[5], steps[4], steps[3]];

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto relative sm:px-8">
      {/* SVG path */}
      <svg
        className="absolute inset-0 pointer-events-none z-0"
        width={svgSize.w || "100%"}
        height={svgSize.h || "100%"}
        style={{ overflow: "visible" }}
      >
        <path d={path} fill="none" stroke="#e2e8f0" strokeWidth="2" />
      </svg>

      {/* Row 1 circles */}
      <div className="grid grid-cols-3 gap-10">
        {row1.map((item, i) => (
          <div key={item.step} className="flex justify-center">
            <div
              ref={(el) => { circleRefs.current[i] = el; }}
              className="w-14 h-14 bg-navy text-amber font-bold text-base rounded-full flex items-center justify-center relative z-10 ring-4 ring-white"
            >
              {item.step}
            </div>
          </div>
        ))}
      </div>
      {/* Row 1 text */}
      <div className="grid grid-cols-3 gap-6 mt-4 mb-6 pr-6">
        {row1.map((item) => (
          <div key={item.step} className="text-center">
            <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Row 2 circles */}
      <div className="grid grid-cols-3 gap-6 mt-6 pr-6">
        {row2.map((item) => {
          const refIdx = parseInt(item.step) - 1;
          return (
            <div key={item.step} className="flex justify-center">
              <div
                ref={(el) => { circleRefs.current[refIdx] = el; }}
                className="w-14 h-14 bg-navy text-amber font-bold text-base rounded-full flex items-center justify-center relative z-10 ring-4 ring-white"
              >
                {item.step}
              </div>
            </div>
          );
        })}
      </div>
      {/* Row 2 text */}
      <div className="grid grid-cols-3 gap-6 mt-4 pr-6">
        {row2.map((item) => (
          <div key={item.step} className="text-center">
            <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
