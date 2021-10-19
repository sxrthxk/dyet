import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { IconButton } from "@chakra-ui/button";
import { IoIosWater } from "react-icons/io";
import { getWaterIntake, setWaterIntake } from "lib/controllers/rtdbCRUD";
import { child, get, onValue, ref } from "@firebase/database";
import { auth, rtdb } from "config/firebaseConfig";
import { useAuth } from "contexts/AuthContext";
import { CSSObject } from "@chakra-ui/styled-system";
import { Spinner } from "@chakra-ui/react";

const WaterIntake = () => {
  const goal = 9;

  const { isUser } = useAuth();

  useEffect(() => {
    if (isUser) {
      const date = new Date().toDateString();
      getWaterIntake(date).then((curCons) => {
        setWaterState((x) => ({
          ...x,
          currentConsumption: curCons,
        }));
        setLoading({
          action: false,
          cardLoad: false
        });
      });
    }
  }, [isUser]);

  const [waterState, setWaterState] = useState({
    currentConsumption: 0,
    goalConsumption: goal,
  });

  const [loading, setLoading] = useState({
    cardLoad: true,
    action: true
  });

  const addUnit = async () => {
    setLoading(x => ({
        ...x,
        action: true
    }));
    if (waterState.currentConsumption < waterState.goalConsumption) {
      setWaterState((x) => ({
        ...x,
        currentConsumption: x.currentConsumption + 1,
      }));
      await setWaterIntake(waterState.currentConsumption + 1);
      setLoading(x => ({
        ...x,
        action: false
    }));
    }
  };

  const removeUnit = async () => {
    setLoading(x => ({
      ...x,
      action: true
  }));
    if (waterState.currentConsumption > 0) {
      setWaterState((x) => ({
        ...x,
        currentConsumption: x.currentConsumption - 1,
      }));
      await setWaterIntake(waterState.currentConsumption - 1);
      setLoading(x => ({
        ...x,
        action: false
    }));
    }
  };

  const disabledProps: CSSObject = { pointerEvents: "none"};

  return (
    <Card sx={loading.action ? disabledProps : undefined} height="12rem">
      {loading.cardLoad && <Spinner m="auto"/>}
      {!loading.cardLoad && <Flex direction="column" alignItems="center">
        <Heading as="h1" fontSize="1.25rem" py="1rem" textAlign="center">
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
        <Flex alignItems="center">
          {false ? "Loading..." : <><Heading pr="1">{waterState.currentConsumption}</Heading>
          out of {waterState.goalConsumption} glasses.</>}
        </Flex>
      </Flex>}
    </Card>
  );
};

export default WaterIntake;
