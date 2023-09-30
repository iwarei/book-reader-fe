import React, { createContext, ReactNode, useState, useMemo } from 'react';

type AlertType = {
  msg: string;
  color: string;
};

type AlertContextType = {
  alert: AlertType | undefined;
  setAlert: React.Dispatch<React.SetStateAction<AlertType | undefined>>;
  clearAlert: () => void;
};

export const AlertContext = createContext<AlertContextType | undefined>(
  undefined
);

type AlertProviderProps = {
  children: ReactNode;
};

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alert, setAlert] = useState<AlertType | undefined>(undefined);

  const clearAlert = () => {
    setAlert(undefined);
  };

  const AlertContextValue: AlertContextType = useMemo(
    () => ({
      alert,
      setAlert,
      clearAlert,
    }),
    [alert]
  );

  return (
    <AlertContext.Provider value={AlertContextValue}>
      {children}
    </AlertContext.Provider>
  );
};
