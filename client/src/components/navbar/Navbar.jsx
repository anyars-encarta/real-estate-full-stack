import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuCloser from '../MenuCloser';
import './navbar.scss';
import { AuthContext } from '../../context/AuthContext';
import { useNotificationStore } from '../../lib/notificationStore';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  MenuCloser(ref, () => setOpen(false));

  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <Link to='/' className='logo'>
          <img src='./logo.png' alt='logo' />
          <span>AnyarsEstate</span>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>
      </div>

      <div className="right">
        {currentUser ? (
          <div className='user'>
            <Link to='/profile' className='profileImg'>
              <img src={currentUser.avatar || '/noavatar.jpg'} alt="user" />
              <span className='userText'>{currentUser.username}</span>
            </Link>
            <Link to='/profile' className='profile'>
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/login'>Sign in</Link>
            <Link to='/register' className='signup'>Sign up</Link>
          </>
        )}

        <div className="menuIcon">
          {/* Can also use onClick={() => setOpen((prev) => !prev)} */}
          <img src={open ? '/close.png' : '/menu.png'} alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? 'menu active' : 'menu'} ref={ref}>
          <Link to='/' onClick={() => setOpen(false)}>Home</Link>
          <Link to='/' onClick={() => setOpen(false)}>About</Link>
          <Link to='/' onClick={() => setOpen(false)}>Contact</Link>
          <Link to='/' onClick={() => setOpen(false)}>Agents</Link>
          <Link to='/login' onClick={() => setOpen(false)}>Sign in</Link>
          <Link to='/register' onClick={() => setOpen(false)}>Sign up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar