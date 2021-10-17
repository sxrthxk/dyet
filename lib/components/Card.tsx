import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";

const Card = (props: BoxProps): JSX.Element => {
  const { children, ...rest } = props;
  return (
    <Box bg="primary" rounded="lg" padding="1rem" m="1rem" color="black" {...rest}>
      {props.children}
    </Box>
  );
};

export default Card;
