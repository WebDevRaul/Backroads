import React from 'react';

import Wrapper from './title_sc';

const Title = ({ title, subtitle }) => (
  <Wrapper>
    <h4>
      <span className='title'>{title}</span>
      <span>{subtitle}</span>
    </h4>
  </Wrapper>
);

export default Title; 
