import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children, user, setUser }) => {
  const [tarefas, setTarefas] = useState([]);

  return (
    <AuthContext.Provider value={{ user, setUser, tarefas, setTarefas }}>
      {children}
    </AuthContext.Provider>
  );
};
