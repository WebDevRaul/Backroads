import React from 'react';
import PropTypes from 'prop-types';

import './hero.scss';

const Hero = ({ children }) => (
  <header className='default-hero'>
    {children}
  </header>
);

Hero.propTypes = {
  children: PropTypes.object.isRequired
};

export default Hero;
