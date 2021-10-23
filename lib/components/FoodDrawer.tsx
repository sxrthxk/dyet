import React, { useState } from "react";
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
import { FoodItem } from "./FoodTracker";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosCheckboxOutline } from "react-icons/io";

interface CustomDrawerProps extends Omit<DrawerProps, "children"> {
  setFoodItems: React.Dispatch<React.SetStateAction<FoodItem[]>>;
}

const FoodDrawer = ({ isOpen, onClose, setFoodItems }: CustomDrawerProps) => {
  const FoodItems: FoodItem[] = [
    {
      id: 1,
      title: "Protein Shake",
      quantity: "30g",
      desc: "in water",
    },
    {
      id: 2,
      title: "Dal",
      quantity: "1 Cup",
      desc: "moong dal/yellow dal",
    },
  ];

  const addItem = (foodItem: FoodItem) => {
    setFoodItems((x) => [...x, foodItem]);
  };

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
          {FoodItems.map((foodItem, index) => (
            <FoodCard
              key={foodItem.id}
              food={foodItem}
              addItem={addItem}
            />
          ))}
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

const FoodCard = ({
  food,
  addItem,
}: {
  food: FoodItem;
  addItem: (foodItem: FoodItem) => void;
}) => {

  const [addState, setAddState] = useState<"none" | "adding" | "added">("none")

  const addHandler = async() => {
    
    await addItem(food);
  };

  return (
    <Flex
      mx="1rem"
      my="0.5rem"
      p="1rem"
      bg="blackAlpha.200"
      rounded="lg"
      justifyContent="space-between"
    >
      <Flex flexDir="column">
        <Flex>
          <Text fontWeight="semibold">{food.title}</Text>
          <Text ml="0.5rem" color="blackAlpha.600">
            {food.quantity}
          </Text>
        </Flex>
        <Text color="blackAlpha.500">{food.desc}</Text>
      </Flex>
      <IconButton aria-label="Add" onClick={addHandler}>
        {<AddIcon />}
      </IconButton>
    </Flex>
  );
};
