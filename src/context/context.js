import React, { useState } from 'react';

export const DataContext = React.createContext();

export const DataComponent = ({ children }) => {
  const [name, setName] = useState();
  const value = {
    name,
    setName,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
