import React, { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsAuthedContext } from './context/AuthProvider';

type RouteAuthGuardProps = {
  children: ReactNode;
  redirect?: string;
};

export const RouteAuthGuard = ({
  children,
  redirect = '/login',
}: RouteAuthGuardProps) => {
  const navigate = useNavigate();
  const { isAuthed } = useContext(IsAuthedContext)!;

  useEffect(() => {
    if (!isAuthed) {
      navigate(redirect);
    }
  }, []);

  if (!isAuthed) {
    return null;
  }

  return React.cloneElement(children as React.ReactElement);
};
