import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Btncards from './Common/Btncards';
import NavBarLogo from './NavBarComponents/NavBarLogo';
import Titles from './NavBarComponents/Titles';

export default function NavBar() {
  return <div className='inline-flex w-full justify-around fixed bg-none mt-4 z-10'>
      <NavBarLogo/>
      <Titles menu="Home"/>
      <Titles menu="Rutas"/>
      <Titles menu="Lugares"/>
      <Titles menu="Acerca de"/>
      <Link to="/LogIn" >
        <Btncards buttonText="Iniciar sesión"/>
      </Link>

      <Outlet/>
  </div>;
}
