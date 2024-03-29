import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { IconButton } from "@chakra-ui/button";
import { IoIosWater } from "react-icons/io";
import { waterIntakeCRUD } from "lib/controllers/rtdbCRUD";
import { child, get, onValue, ref } from "@firebase/database";
import { auth, rtdb } from "config/firebaseConfig";
import { useAuth } from "contexts/AuthContext";
import { CSSObject } from "@chakra-ui/styled-system";
import { Spinner } from "@chakra-ui/react";
import HomeHeading from "./HomeHeading";
import CustomSpinner from "./CustomSpinner";

const WaterIntake = () => {
  const GOAL = 9;
  // PLACEHOLDER VAR, WOULD REDUCE WITH DATA FETHCED FROM FIRESTORE LATER

  const { isUser } = useAuth();

  useEffect(() => {
    console.log(isUser);
    if (isUser === "yes") {
      const date = new Date().toDateString();
      waterIntakeCRUD.getWaterIntake(date).then((curCons) => {
        setWaterState((x) => ({
          ...x,
          currentConsumption: curCons,
        }));
        setLoading({
          action: false,
          cardLoad: false,
        });
      });
    }
  }, [isUser]);

  const [waterState, setWaterState] = useState({
    currentConsumption: 0,
    goalConsumption: GOAL,
  });

  const [loading, setLoading] = useState({
    cardLoad: true,
    action: true,
  });

  const addUnit = async () => {
    setLoading((x) => ({
      ...x,
      action: true,
    }));
    if (waterState.currentConsumption < waterState.goalConsumption) {
      setWaterState((x) => ({
        ...x,
        currentConsumption: x.currentConsumption + 1,
      }));
      await waterIntakeCRUD.setWaterIntake(waterState.currentConsumption + 1);
      setLoading((x) => ({
        ...x,
        action: false,
      }));
    }
  };

  const removeUnit = async () => {
    setLoading((x) => ({
      ...x,
      action: true,
    }));
    if (waterState.currentConsumption > 0) {
      setWaterState((x) => ({
        ...x,
        currentConsumption: x.currentConsumption - 1,
      }));
      await waterIntakeCRUD.setWaterIntake(waterState.currentConsumption - 1);
      setLoading((x) => ({
        ...x,
        action: false,
      }));
    }
  };

  const disabledProps: CSSObject = { pointerEvents: "none" };

  return (
    <Card sx={loading.action ? disabledProps : undefined}>
      <HomeHeading>Track Your Water 🌊 consumption</HomeHeading>
      {loading.cardLoad ? (
        <CustomSpinner />
      ) : (
        <Flex direction="column" alignItems="center" mt="2rem" mb="1rem">
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
            <Heading pr="1">{waterState.currentConsumption}</Heading>
            out of {waterState.goalConsumption} glasses.
          </Flex>
        </Flex>
      )}
    </Card>
  );
};

export default WaterIntake;
