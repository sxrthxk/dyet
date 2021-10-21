import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/modal";
import { Input } from "@chakra-ui/input";
import { Button, IconButton } from "@chakra-ui/button";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { AddIcon, PlusSquareIcon } from "@chakra-ui/icons";

interface FoodItem {
  title: string;
  quantity: string;
  desc: string;
}

const FoodDrawer = ({ isOpen, onClose }: Omit<DrawerProps, "children">) => {
  const FoodItems: FoodItem[] = [
    {
      title: "Protein Shake",
      quantity: "30g",
      desc: "in water",
    },
  ];

  return (
    <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton _focus={{ border: "none" }} />
        <DrawerHeader>Add Food Item</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>
        <Box maxH="37.5vh" overflowY="auto">
          <FoodCard food={FoodItems[0]} />
          <FoodCard food={FoodItems[0]} />
          <FoodCard food={FoodItems[0]} />
          <FoodCard food={FoodItems[0]} />
          <FoodCard food={FoodItems[0]} />
          <FoodCard food={FoodItems[0]} />
        </Box>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FoodDrawer;

const FoodCard = ({ food }: { food: FoodItem }) => {
  return (
    <Flex mx="1rem" my="0.5rem" p="1rem" bg="blackAlpha.200" rounded="lg" justifyContent="space-between">
      <Flex flexDir="column">
        <Flex>
          <Text fontWeight="semibold">{food.title}</Text>
          <Text ml="0.5rem" color="blackAlpha.600">
            {food.quantity}
          </Text>
        </Flex>
        <Text color="blackAlpha.500">{food.desc}</Text>
      </Flex>
      <IconButton aria-label="Add">
            <AddIcon />
      </IconButton>
    </Flex>
  );
};
