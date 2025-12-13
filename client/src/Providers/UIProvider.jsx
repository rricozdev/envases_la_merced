import { createContext, useState } from "react";

export const UIContext = createContext();

export function UIProvider({ children }) {
  const [overlays, setOverlays] = useState({});

  const open = (key) => {
    setOverlays((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const close = (key) => {
    setOverlays((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const toggle = (key) => {
    setOverlays((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isOpen = (key) => Boolean(overlays[key]);

  return (
    <UIContext.Provider
      value={{
        open,
        close,
        toggle,
        isOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
