import React, { useState } from 'react';
import sublinks from './data';

export const AppContext = React.createContext();
function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [btnLocation, setBtnLocation] = useState({});
  const [submenuData, setSubmenuData] = useState({ page: '', links: [] });

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openSubmenu(text, coodinates) {
    const data = sublinks.find((obj) => {
      return obj.page === text;
    });
    console.log(data);
    setSubmenuData(data);
    console.log(submenuData);
    setBtnLocation(coodinates);
    setIsSubmenuOpen(true);
  }

  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        btnLocation,
        submenuData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
