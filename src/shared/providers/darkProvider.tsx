"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

interface DarkProviderContext {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export const DarkProviderContext = createContext({} as DarkProviderContext);

const DarkProviderContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const defaultProps = useMemo(
    () => ({ darkTheme, setDarkTheme }),
    [darkTheme]
  );

  return (
    <DarkProviderContext.Provider value={defaultProps}>
      {children}
    </DarkProviderContext.Provider>
  );
};

export { DarkProviderContextProvider };
