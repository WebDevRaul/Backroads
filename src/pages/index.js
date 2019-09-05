import React from "react";
import { Link } from 'gatsby';

import Layout from '../layout/Layout';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';

export default () => (
  <Layout>
    <Hero >
      <Banner 
        title='continue exploring' 
        info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'>
        <Link to='/tours' className='btn-white'>explore tours</Link>
      </Banner>
    </Hero>
  </Layout>
)