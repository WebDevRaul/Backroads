import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import BackgroundImage from 'gatsby-background-image';

import './styledHero.scss';

const StyledHero = ({ img, className, children, home }) => {
  return (
    <div className={classnames('styled-hero', {'bg-linear': home})}>
      <BackgroundImage className={className} fluid={img} home={home}>
        {children}
      </BackgroundImage>
    </div>
  )
};


StyledHero.propTypes = {
  img: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default StyledHero;