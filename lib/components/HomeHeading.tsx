import { Heading } from "@chakra-ui/layout";
import React from "react";

const HomeHeading = ({ children }: { children: string }) => {
  return (
    <Heading fontSize="1.25rem" m="auto" pt="1rem">
      {children}
    </Heading>
  );
};

export default HomeHeading;
