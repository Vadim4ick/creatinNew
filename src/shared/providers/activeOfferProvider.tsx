"use client";

import { usePathname } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { getRouteServices } from "../const/pages";
import { STORAGE_KEYS } from "../const/storageKey";

export type ActiveOffers = "offer" | "complex";

interface ActiveOfferContext {
  setActiveOffers: Dispatch<SetStateAction<ActiveOffers | null>>;
  activeOffers: ActiveOffers | null;
  setActiveComplex: Dispatch<SetStateAction<boolean>>;
  activeComplex: boolean;
}

export const ActiveOfferProviderContext = createContext(
  {} as ActiveOfferContext
);

const ActiveOfferProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const [activeOffers, setActiveOffers] = useState<ActiveOffers | null>(
    (typeof window !== "undefined" &&
      pathname === getRouteServices() &&
      (sessionStorage.getItem(STORAGE_KEYS.ACTIVE_OFFER) as ActiveOffers)) ||
      null
  );

  const [activeComplex, setActiveComplex] = useState(false);

  const defaultProps = useMemo(
    () => ({
      activeOffers,
      setActiveOffers,
      setActiveComplex,
      activeComplex,
    }),
    [activeOffers, activeComplex]
  );

  return (
    <ActiveOfferProviderContext.Provider value={defaultProps}>
      {children}
    </ActiveOfferProviderContext.Provider>
  );
};

export { ActiveOfferProvider };
