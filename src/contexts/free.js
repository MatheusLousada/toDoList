import React, { createContext } from 'react';

export const FreeContext = createContext();

export const FreeProvider = ({ children, user, setUser }) => {
  return (
    <FreeContext.Provider value={{ user, setUser }}>
      {children}
    </FreeContext.Provider>
  );
};