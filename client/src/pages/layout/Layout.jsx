import React, { useContext } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './layout.scss';
import { Outlet, Navigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Layout = () => {
  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    !currentUser ? (
      <Navigate to='/login' />
    ) : (
      <div className='layout'>
        <div className="navbar">
          <Navbar />
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    )
  )
}

export { Layout, RequireAuth }