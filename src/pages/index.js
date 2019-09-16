import React from "react";
import { Link, graphql } from 'gatsby';

import Layout from '../layout/Layout';
import Banner from '../components/common/banner/Banner';
import About from '../components/index_page/about/About';
import Services from "../components/index_page/about/service/Services";
import StyledHero from "../components/common/styledHero/Styled_Hero";


export default ({ data }) => (
  <Layout>
    <StyledHero home='true' img={data.heroImage.childImageSharp.fluid} className='bg-linear' >
      <Banner 
        title='continue exploring' 
      >
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Link to='/tours' className='btn-white'>explore tours</Link>
        </>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
); 

export const query = graphql`
  query {
    heroImage: file(relativePath:{eq:"defaultBcg.jpeg"}) {
      childImageSharp{
        fluid(quality:90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`