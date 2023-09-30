import React, { createContext, ReactNode, useState, useMemo } from 'react';

type UserInfo = {
  id: number;
  name: string;
  email: string;
};

type AuthInfoContextType = {
  userInfo: UserInfo | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
};

type IsAuthedContextType = {
  isAuthed: boolean;
  setIsAuthed: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthInfoContext = createContext<AuthInfoContextType | undefined>(
  undefined
);

export const IsAuthedContext = createContext<IsAuthedContextType | undefined>(
  undefined
);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthed, setIsAuthed] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  const authInfoContextValue: AuthInfoContextType = useMemo(
    () => ({
      userInfo,
      setUserInfo,
    }),
    [userInfo]
  );

  const isAuthedContextValue: IsAuthedContextType = useMemo(
    () => ({
      isAuthed,
      setIsAuthed,
    }),
    [isAuthed]
  );

  return (
    <IsAuthedContext.Provider value={isAuthedContextValue}>
      <AuthInfoContext.Provider value={authInfoContextValue}>
        {children}
      </AuthInfoContext.Provider>
    </IsAuthedContext.Provider>
  );
};
