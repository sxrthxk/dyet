import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import Card from "./Card";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { IconButton } from "@chakra-ui/button";
import { IoIosWater } from "react-icons/io";

const WaterIntake = () => {
  const curCons = 5;
  const goal = 9;

  const [waterState, setWaterState] = useState({
    currentConsumption: curCons,
    goalConsumption: goal,
    barWidth: (curCons * 100) / goal,
  });
  console.log(waterState.barWidth);

  const addUnit = () => {
    if (waterState.currentConsumption < waterState.goalConsumption) {
      setWaterState((x) => ({
        ...x,
        currentConsumption: x.currentConsumption + 1,
      }));
    }
  };

  const removeUnit = () => {
    if (waterState.currentConsumption > 0) {
      setWaterState((x) => ({
        ...x,
        currentConsumption: x.currentConsumption - 1,
      }));
    }
  };

  return (
    <Card>
      <Flex direction="column" alignItems="center">
        <Heading fontSize="1.25rem" py="1rem">
          Track Your Water 🌊 consumption
        </Heading>
        <Flex w="full" alignItems="center">
          <IconButton
            aria-label="Minus Button"
            variant="ghost"
            fill="blue.600"
            onClick={removeUnit}
            _focus={{ border: "none" }}
          >
            <AiFillMinusCircle size="1.5rem" fill="current" />
          </IconButton>
          <Box
            mx="auto"
            w="80%"
            h="0.75rem"
            bg="blue.400"
            my="0.5rem"
            rounded="md"
            position="relative"
            overflow="hidden"
          >
            <Box
              h="full"
              bg="blue.600"
              w={`${
                (waterState.currentConsumption * 100) /
                waterState.goalConsumption
              }%`}
              transition="0.2s width cubic-bezier(.29,.05,.31,1.05)"
              position="absolute"
              left="0"
            />
          </Box>
          <IconButton
            aria-label="Plus"
            variant="ghost"
            fill="blue.600"
            p="0"
            _focus={{ border: "none" }}
            onClick={addUnit}
          >
            <AiFillPlusCircle size="1.5rem" fill="current" />
          </IconButton>
        </Flex>
        <Text display="flex" alignItems="center">
          <Heading pr="1">{waterState.currentConsumption}</Heading>
          out of {waterState.goalConsumption} glasses.
        </Text>
      </Flex>
    </Card>
  );
};

export default WaterIntake;
