import React from 'react';
import { RecoilRoot } from 'recoil';
import NavBar from "./navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <RecoilRoot>
      <NavBar />
      {children}
    </RecoilRoot>
  )
};

export default Layout;