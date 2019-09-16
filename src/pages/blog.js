import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';

import StyledHero from "../components/common/styledHero/Styled_Hero";

const blog = ({ data: { blogImage: { childImageSharp: { fluid } } } }) => {
  return (
    <Layout>
      <StyledHero img={fluid}>
        <>
        </>
      </StyledHero>
    </Layout>
  )
}

export default blog;

export const query = graphql`
  query {
    blogImage: file(relativePath:{eq:"blogBcg.jpeg"}) {
      childImageSharp{
        fluid(quality:90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`