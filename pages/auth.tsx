import { Button } from "@chakra-ui/button";
import {
  getAdditionalUserInfo,
  getRedirectResult,
  UserCredential,
} from "@firebase/auth";
import Layout from "components/Layout";
import { useAuth } from "contexts/AuthContext";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const { GAuthHandler, isUser, auth } = useAuth();

  const router = useRouter();

  getRedirectResult(auth).then((credential: UserCredential | null) => {
    console.log(credential);
    if (credential) {
      const additionalInfo = getAdditionalUserInfo(credential);
      if (additionalInfo?.isNewUser) {
        router.push("/welcome");
      } else {
        router.push("/home");
      }
    }
  });

  return (
    <Layout isFlexCentered hasBottomNavbar={false}>
      <Button
        isLoading={isUser === "loading"}
        variant="outline"
        colorScheme="teal"
        shadow="xl"
        leftIcon={<FcGoogle />}
        onClick={GAuthHandler}
      >
        Continue With Google
      </Button>
    </Layout>
  );
};

export default SignUp;
