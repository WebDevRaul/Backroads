import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../layout/Layout';
import Banner from '../components/common/banner/Banner';
import { primaryColor } from '../layout/layout.scss';

const errorStyle = {
  backgroundColor: primaryColor,
  minHeight: 'calc(100vh - 62px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const error = () => {
  return (
    <Layout>
      <header style={errorStyle}>
        <Banner title='oops it`s a dead end'>
          <AniLink fade to='/' className='btn-white'>back to home page</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error;
