import React from 'react';

import links from '../../constants/links';
import icons from '../../constants/social_icons';
import { Link } from 'gatsby';

import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='links'> 
        <ul>
          {links.map((item, index) => {
            const { path, text } = item;
            return <li key={index}><Link to={path} />{text}</li>
          })}
        </ul>
      </div>
      <div className='icons'>
        {icons.map((item, index) => {
            const {icon, url} = item;
            return <a key={index} href={url} target='_blank' rel='noopener noreferrer'>{icon}</a>
        })}
      </div>
      <div className='copy-right'>
        copyright &copy; backroads travel company {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}

export default Footer
