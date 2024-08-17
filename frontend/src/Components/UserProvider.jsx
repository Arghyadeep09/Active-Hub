import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ loggedIn: true });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
