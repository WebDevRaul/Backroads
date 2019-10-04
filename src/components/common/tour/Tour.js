import React from 'react';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link';

import { FaMap } from 'react-icons/fa';
import StyledTour from './StyledTour';

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour;
  return (
    <StyledTour>

    </StyledTour>
  )
}

export default Tour;