"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface ContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  isMenuOpen: false,
  setIsMenuOpen: (prev): boolean => !prev,
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
