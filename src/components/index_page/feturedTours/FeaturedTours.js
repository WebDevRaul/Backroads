import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Tour from '../../common/tour/Tour';
import Title, { } from '../../common/title/Title';
import StyledFeatured from './StyledFeatured';

const FeaturedTours = () => {
  const response = useStaticQuery(getTours);
  const { edges } = response.featuredTours;

  return (
    <StyledFeatured>
      <section className='tours'>
        <Title title='featured' subtitle='tours' />
        <div className='center'>
          {
            edges.map(({ node }), index => <Tour key={index} tour={node} />)
          }
        </div>
        <AniLink fade to='/tours' className='btn btn-primary'>all tours</AniLink>
      </section>
    </StyledFeatured>
  )
}

export default FeaturedTours;

const getTours = graphql`
  featuredTours:allContentfulTour(filter:{featured:{eq:true}}) {
    edges{
      node{
        name
        price
        slug
        country
        contenful_id
        days
        images{
          fluid{
            ...GastbyContenfulFluid_tracedSVG
          }
        }
      }
    }
  }
`