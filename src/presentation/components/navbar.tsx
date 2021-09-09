import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';

const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '2em',
  paddingRight: '3em',
  borderBottom: '2px solid #B0B0B0'
};

const NavBar: React.FC = () => {
  return(
    <nav style={navStyle}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Index
        </Link>
        <Link color="inherit" href="/about">
          About
        </Link>
        <Link color="inherit" href="/items">
          Items
        </Link>
      </Breadcrumbs>      
    </nav>
  )
}

export default NavBar;