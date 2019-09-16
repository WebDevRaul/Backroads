import React from 'react';
import PropTypes from 'prop-types';

import './banner.scss';

const Banner = ({ title, children }) => {
  return (
    <div className='banner'>
      <h1>{title}</h1>
        {children}
    </div>
  )
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default Banner;
