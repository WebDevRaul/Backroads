import React from 'react';
import PropTypes from 'prop-types';

import './banner.scss';

const Banner = ({ title, info, children }) => {
  return (
    <div className='banner'>
      <h1>{title}</h1>
        {children}
    </div>
  )
};

Banner.defaultProps = {
  info: PropTypes.string
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default Banner;
