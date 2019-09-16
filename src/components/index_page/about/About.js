import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Title from '../../common/title/Title';
import Wrapper from './about_sc';
import Img from 'gatsby-image';

// import defaultBcg from '../../../images/defaultBcg.jpeg';

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
      childImageSharp{
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout);

  return (
    <Wrapper className='about'>
      <Title title='about' subtitle='us' />
      <div className='about-center'>
        <article className='about-img'>
          <div className='img-container'>
            {/* <img src={defaultBcg} alt='default background' /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt='awesome landscape' />
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
