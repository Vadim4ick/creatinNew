"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

interface HomePreloaderContext {
  setPreloader: Dispatch<SetStateAction<boolean>>;
  preloader: boolean;
}

export const HomePreloaderProviderContext = createContext(
  {} as HomePreloaderContext
);

const HomePreloaderContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [preloader, setPreloader] = useState<boolean>(true);

  const defaultProps = useMemo(
    () => ({
      setPreloader,
      preloader,
    }),
    [preloader]
  );

  return (
    <HomePreloaderProviderContext.Provider value={defaultProps}>
      {children}
    </HomePreloaderProviderContext.Provider>
  );
};

export { HomePreloaderContextProvider };
