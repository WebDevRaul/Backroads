import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layout/Layout';
import Banner from '../components/banner/Banner';
import { primaryColor } from '../layout/variables.scss';

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
      {console.log(primaryColor)}
      <header style={errorStyle}>
        <Banner title='oops it`s a dead end'>
          <Link to='/' className='btn-white'>back to home page</Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error;
