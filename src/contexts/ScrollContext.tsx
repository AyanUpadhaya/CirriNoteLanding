/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

type ScrollContextType = {
  clickedSection: string | null;
  setClickedSection: (id: string | null) => void;
  isAbout: boolean;
  setIsAbout:(value:boolean)=>void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [clickedSection, setClickedSection] = useState<string | null>(null);
  const [isAbout,setIsAbout] = useState(false)

  return (
    <ScrollContext.Provider
      value={{ clickedSection, setClickedSection, isAbout, setIsAbout }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const ctx = useContext(ScrollContext);
  if (!ctx)
    throw new Error("useScrollContext must be used inside ScrollProvider");
  return ctx;
}
