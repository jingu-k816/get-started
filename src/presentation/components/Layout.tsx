import React from 'react';
import NavBar from "./navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
};

export default Layout;