import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Tour from '../../common/tour/Tour';
import Title, { } from '../../common/title/Title';

const FeaturedTours = () => {
  const response = useStaticQuery(getTours);
  const { edges } = response.featuredTours;

  return (
    <section className='tours'>
      <Title title='featured' subtitle='tours' />
      {
        edges.map(({ node }), index => <Tour key={index} tour={node} />)
      }
      <AniLink fade to='/tours' className='btn btn-primary'>all tours</AniLink>
    </section>
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