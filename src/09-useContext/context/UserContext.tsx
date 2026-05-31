import React, { useState } from 'react';

interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState('Fernando');

  return <>{children}</>;
};
