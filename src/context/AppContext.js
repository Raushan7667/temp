import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [groupBy, setGroupBy] = useState('priority');
  const [sortBy, setSortBy] = useState('priority');

  return (
    <AppContext.Provider value={{ groupBy, setGroupBy, sortBy, setSortBy }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
