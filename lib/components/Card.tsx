import { Box, BoxProps, Flex } from "@chakra-ui/layout";
import React from "react";

const Card = (props: BoxProps): JSX.Element => {
  const { children, ...rest } = props;
  return (
    <Flex alignItems="stretch" justifyContent="center" flexDirection="column" bg="primary" rounded="lg" padding="1rem" m="1rem" color="black" boxShadow="2xl" {...rest}>
      {props.children}
    </Flex>
  );
};

export default Card;
