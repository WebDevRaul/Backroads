import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

import Logo from '../../images/logo.svg';
import links from '../../constants/links';
import icons from '../../constants/social_icons';

import './navbar.scss';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  
  const toggle = () => {
    setOpen(isOpen => !isOpen);
  };


  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={Logo} alt='logo' />
          <button type='button' className='logo-btn' onClick={toggle}>
            <FaAlignRight className='logo-icon' />
          </button>
        </div>
        <ul className={classnames('nav-links', {'show-nav' : !isOpen})}>
          {links.map(({ path, text }) => {
            return <li key={text}><Link to={path} />{text}</li>
          })}
        </ul>
        <div className='nav-social-links'>
          {icons.map((item, index) => {
            const {icon, url} = item;
            return <a key={index} href={url} target='_blank' rel='noopener noreferrer'>{icon}</a>
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
