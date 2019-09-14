import React from 'react';
import Layout from '../layout/Layout';
import { graphql } from 'gatsby';

const blog = ({ data: { site : { siteMetadata: { title } } } }) => {
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        descriptios
        title
      }
    }
  }
`

export default blog;