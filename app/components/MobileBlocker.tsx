"use client";

import { useEffect, useState } from "react";

export default function MobileBlocker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        const ua = navigator.userAgent;
        setIsMobile(
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            ua,
          ),
        );
      }
    };
    checkMobile();
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-2xl text-center px-4">
      Мобильная версия сайта находится в разработке.
      <br />
      Пожалуйста, откройте сайт на компьютере.
    </div>
  );
}
