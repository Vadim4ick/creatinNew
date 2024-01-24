"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

interface BannerAnimationContext {
  setAnimation: Dispatch<SetStateAction<boolean>>;
  animation: boolean;
}

export const BannerAnimationProviderContext = createContext(
  {} as BannerAnimationContext
);

const BannerAnimationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [animation, setAnimation] = useState<boolean>(false);

  const defaultProps = useMemo(
    () => ({
      animation,
      setAnimation,
    }),
    [animation]
  );

  return (
    <BannerAnimationProviderContext.Provider value={defaultProps}>
      {children}
    </BannerAnimationProviderContext.Provider>
  );
};

export { BannerAnimationContextProvider };
