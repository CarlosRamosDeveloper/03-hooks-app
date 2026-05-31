import React, { createContext, useState } from 'react';
import { users, type User } from '../data/user.mock.data';

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

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps,
);

export const UserContextProvider = ({ children }: Props) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number): boolean => {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      console.log(`User ${userId} not found!`);
      setUser(null);
      setAuthStatus('non-authenticated');
      return false;
    }

    setUser(user);
    setAuthStatus('authenticated');
    return true;
  };

  const handleLogout = () => {
    setAuthStatus('non-authenticated');
    setUser(null);
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
