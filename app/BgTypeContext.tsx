"use client";

import { createContext, useContext } from "react";

export type BgType = "normal" | "zoom";

export const BgTypeContext = createContext<BgType>("normal");

export function useBgType() {
  return useContext(BgTypeContext);
}
