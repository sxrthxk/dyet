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
        {/* ---------- MAIN PAGE ------- */}
    {/* Box that specifies how much ltr water consoomed */}

    {/* Add Recipe, title and all, an add button and foods arranged in card layout 
      - Adding Foods will include a scrollable dropdown, with a form on top to add new foods, or custom foods in the bottom
    */}

    {/* Expected Sleep Time */}

    {/* Pre Configured Split that will be later updated to be configured by user, user can check this to confirm workout session */}

    {/* ENDREGION ----------------- */}

    {/* ---------- USER ACCOUNT --------- */}

    {/* Email, googleauth pfp etc and logout button */}

    {/* Chart showing total sleep time by week, total water intake and workout sessions */}

    {/* ENDREGION ---------------------------------- */}

    {/* Maybe Add Blogs later idk or some recipe guides */}

    {/* --------- PERSONAL RECORDS/ ICON: DUMBBELL ---- */}

    {/* User can set lift total, bench, squat, deadlift max and maybe ohp, track bodyweight and add progress info, images etc */}

    {/* ENDREGION -------------------------------- N */}

    {/* --------------- SETTINGS/CONFIG ----------- */}

    {/* User can change their stats, metric or standard units, goals and workout splits etc */}

    {/* ------------ ENDREGION ------------------ */}
        </>
      </Layout>
  )
}

export default Home
