import { CheckCircleIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import React from "react";

const Tracked = ({ children }: { children: JSX.Element | string | null }) => {
  return (
    <Text fontSize="1.1rem" fontWeight="semibold" p="1rem">
      <CheckCircleIcon fill="current" color="Highlight" mr="0.5rem" />
      {children}
    </Text>
  );
};

export default Tracked;
