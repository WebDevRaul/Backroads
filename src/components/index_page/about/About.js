import React from 'react';

import Title from '../../common/title/Title';
import Wrapper from './about_sc';

import defaultBcg from '../../../images/defaultBcg.jpeg'

const About = () => {
  return (
    <Wrapper className='about'>
      <Title title='about' subtitle='us' />
      <div className='about-center'>
        <article className='about-img'>
          <div className='img-container'>
            <img src={defaultBcg} alt='default background' />
          </div>
        </article>
        <article className='about-info'>
          <h4>Explore the difference</h4>
          <p>Culpa nulla velit proident id fugiat excepteur.</p>
          <p>Culpa nulla velit proident id fugiat excepteur.</p>
          <button type='button' className='btn-primary'>read more</button>
        </article>
      </div>
    </Wrapper>
  )
}

export default About
