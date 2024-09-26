"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type TSearchContexType = {
  searchNum: string;
  setSearchNum: (num: string) => void;
};

const SearchContext = createContext<TSearchContexType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchNum, setSearchNum] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchNum, setSearchNum }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
