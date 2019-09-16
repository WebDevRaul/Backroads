import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';

import StyledHero from "../components/common/styledHero/Styled_Hero";

const tours = ({ data: { tourImage: { childImageSharp: { fluid } } } }) => {
  return (
    <Layout>
      <StyledHero img={fluid}>
        <>
        </>
      </StyledHero>
    </Layout>
  )
}

export default tours

export const query = graphql`
  query {
    tourImage: file(relativePath:{eq:"defaultBcg.jpeg"}) {
      childImageSharp{
        fluid(quality:90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`