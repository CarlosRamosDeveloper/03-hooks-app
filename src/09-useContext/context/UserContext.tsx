import React, { createContext, useState } from 'react';
import type { User } from '../data/user.mock.data';

type AuthStatus = 'checking' | 'authenticated' | 'non-authenticated';

interface Props {
  children: React.ReactNode;
}

interface UserContextProps {
  authStatus: AuthStatus;
  user: User | null;
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);

export const UserContextProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number): boolean => {
    console.log(`User id: ${userId}`);
    return true;
  };

  const handleLogout = () => {
    console.log('Logging out!');
  };

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
