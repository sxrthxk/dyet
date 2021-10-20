import type { NextPage } from "next";
import Head from "next/head";
import { Button, Box, Heading, Flex } from "@chakra-ui/react";
import Layout from "components/Layout";
import Card from "components/Card";
import { useAuth } from "contexts/AuthContext";
import { auth } from "config/firebaseConfig";
import NextLink from "next/link";

const Home: NextPage = () => {
  const { isUser, signOutHandler } = useAuth();

  const currentUser = auth.currentUser;

  return (
    <Layout>
      <>
        <Head>
          <title>DYET</title>
          <meta name="description" content="Fitness App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Card>
          {isUser === "yes" && (
            <Box>
              <Heading fontSize="1.25rem">You are signed in as:</Heading>
              <Box>{currentUser?.displayName}</Box>
              <Box>Email: {currentUser?.email}</Box>
              <Box>uid: {currentUser?.uid}</Box>
            </Box>
          )}
          <Flex justifyContent="space-around" my="1rem">
            <Button colorScheme="linkedin">
              <NextLink href="/home">Home</NextLink>
            </Button>
            <Button colorScheme="red" onClick={signOutHandler}>
              Signout
            </Button>
          </Flex>
        </Card>
        {/* ---------- MAIN PAGE ------- */}
        {/* Box that specifies how much ltr water consoomed //? DONE */}

        {/* Add Recipe, title and all, an add button and foods arranged in card layout 
          - Adding Foods will include a scrollable dropdown, with a form on top to add new foods, or custom foods in the bottom
          //! ONLY ONE THAT'S LEFT
        */}

        {/* Expected Sleep Time //? DONE*/}

        {/* Pre Configured Split that will be later updated to be configured by user, user can check this to confirm workout session //TODO: CURRENT*/}

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
  );
};

export default Home;
