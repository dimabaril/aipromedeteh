"use client";

// Background.tsx
// Фиксированный фон, обычный или зумированный, скрыт на мобильных

export default function Background({ type }: { type: "normal" | "zoom" }) {
  return (
    <div
      className={`fixed inset-0 -z-10 hidden sm:block transition-all duration-700 ${
        type === "zoom" ? "scale-[1.6]" : "scale-100"
      }`}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, transparent 65%, rgba(30,6,33,0.6) 100%), url('/images/back.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
}
