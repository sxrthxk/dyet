import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

import { Box } from "@chakra-ui/react";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FcPlus } from "react-icons/fc";
import Card from "./Card";
import CustomSpinner from "./CustomSpinner";
import HomeHeading from "./HomeHeading";
import FoodDrawer from "./FoodDrawer";

const FoodTracker = () => {
  const {
    getButtonProps,
    getDisclosureProps,
    isOpen,
    onClose,
    onToggle,
    onOpen,
  } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Card position="relative">
        <HomeHeading>Track Your Food 🥗</HomeHeading>

        {false && <CustomSpinner />}

        {true && (
          <Text my="1rem" fontWeight="medium" w="80%" mx="auto">
            No Food Items Tracked. Start adding by clicking the + icon.
          </Text>
        )}

        <IconButton
          rounded="full"
          _focus={{
              border: "none"
          }}
          p="0"
          aria-label="Add"
          m="1rem"
          w="fit-content"
          position="absolute"
          top="0"
          right="0"
          onClick={onOpen}
        >
          <AddIcon />
        </IconButton>
        <FoodDrawer isOpen={isOpen} onClose={onClose} />
      </Card>
    </>
  );
};

export default FoodTracker;
