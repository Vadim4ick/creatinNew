"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

interface PopupContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClickPopup: () => void;
}

export const PopupProviderContext = createContext({} as PopupContext);

const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const onClickPopup = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const defaultProps = useMemo(
    () => ({
      open,
      onClickPopup,
      setOpen,
    }),
    [onClickPopup, open]
  );

  return (
    <PopupProviderContext.Provider value={defaultProps}>
      {children}
    </PopupProviderContext.Provider>
  );
};

export { PopupProvider };
