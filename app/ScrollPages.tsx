"use client";

import Background from "./Background";
import { useEffect, useRef, useState } from "react";
import StartSection from "./pages/StartSection";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import FinishSection from "./pages/FinishSection";

const sections = [
  StartSection,
  Section2,
  Section3,
  Section4,
  Section5,
  FinishSection,
];

export default function ScrollPages() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  // Определяем тип фона
  const bgType =
    activeIdx === 0 || activeIdx === sections.length - 1 ? "normal" : "zoom";
  // Для плавного перехода используем задержку
  const [smoothBgType, setSmoothBgType] = useState<"normal" | "zoom">(bgType);
  useEffect(() => {
    if (bgType !== smoothBgType) {
      const timeout = setTimeout(() => setSmoothBgType(bgType), 100);
      return () => clearTimeout(timeout);
    }
  }, [bgType, smoothBgType]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
    sections.forEach((_, idx) => {
      const ref = sectionRefs.current[idx];
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIdx(idx);
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      <Background type={smoothBgType} />
      {sections.map((SectionComponent, idx) => (
        <section
          key={idx}
          ref={(el) => {
            sectionRefs.current[idx] = el;
          }}
          className="flex items-center justify-center min-h-screen snap-center"
        >
          <SectionComponent />
        </section>
      ))}
    </div>
  );
}
