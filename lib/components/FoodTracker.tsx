import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FcPlus } from "react-icons/fc";
import Card from "./Card";
import CustomSpinner from "./CustomSpinner";
import HomeHeading from "./HomeHeading";
import FoodDrawer from "./FoodDrawer";

interface FoodItem {
  id: number;
  title: string;
  quantity: string;
  desc: string;
}

export type { FoodItem };

const FoodTracker = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  return (
    <>
      <Card position="relative">
        <HomeHeading>Track Your Food 🥗</HomeHeading>

        {false && <CustomSpinner />}

        {foodItems.length ? (
          <Box mt="1rem" maxH="30rem" overflowY="auto">
          {foodItems.map((fooditem, index) => (
            <Flex justifyContent="space-between" key={fooditem.id} my="0.5rem" p="1rem" rounded="lg" boxShadow="" bg="blackAlpha.300">
              <Text fontSize="1.25rem" fontWeight="semibold">
              {fooditem.title}
              </Text>
              <Text>
                {fooditem.quantity}
              </Text>
            </Flex>
          ))}
          </Box>
        ) : (
          <Text my="1rem" fontWeight="medium" w="80%" mx="auto">
            No Food Items Tracked. Start adding by clicking the + icon.
          </Text>
        )}

        <IconButton
          rounded="full"
          _focus={{
            border: "none",
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
        <FoodDrawer
          isOpen={isOpen}
          onClose={onClose}
          setFoodItems={setFoodItems}
        />
      </Card>
    </>
  );
};

export default FoodTracker;
