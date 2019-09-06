import React from 'react';

import services from '../../../../constants/services'; 

import Title from '../../../common/title/Title';
import Wrapper from './services_sc';

const Services = () => (
  <Wrapper className='services'>
    <Title title='our' subtitle='services' />
    <div className='center'>
      {
        services.map((item, index) => {
          const { icon, title, text } = item;
          return <article key={index} className='service'>
            <span>{icon}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        })
      }
    </div>
  </Wrapper>
);

export default Services;