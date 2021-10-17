import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@chakra-ui/react';
import Layout from 'components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
      <Head>
        <title>DYET</title>
        <meta name="description" content="Fitness App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Box>This is the landing page</Box>
        </>
      </Layout>
  )
}

export default Home
