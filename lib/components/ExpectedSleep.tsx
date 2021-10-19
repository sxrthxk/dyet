import { Button, IconButton } from "@chakra-ui/button";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useAuth } from "contexts/AuthContext";
import { sleepTrackerCRUD } from "lib/controllers/rtdbCRUD";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const ExpectedSleep = () => {
  const sleepTracker = async(hour: number) => {
    setLoadState("loading")
    await sleepTrackerCRUD.setSleep(hour);
    setLoadState("set")
  };

  const [loadState, setLoadState] = useState<"loading" | "set" | "unset">("loading");

  const {isUser} = useAuth();

  useEffect(() => {
    if(isUser) {
        const date = new Date().toDateString();
        sleepTrackerCRUD.getSleep(date).then(sleep => {
            if(sleep === -1) {
                setLoadState("unset")
            } else {
                setLoadState("set")
            }
        })
    }
  }, [isUser])

  return (
    <Card>
      <Heading fontSize="1.25rem" m="auto" pt="1rem">
        Track Your Sleep 😴 Time
      </Heading>
      {/* LOADING COMPONENT */}
      {loadState === "loading" && <Spinner margin="auto" my="1rem" />}

      {/* ALREADY TRACKED COMPONENT */}
      {loadState === "set" && (
        <Text fontSize="1.1rem" fontWeight="semibold" p="1rem">
          <CheckCircleIcon fill="current" color="Highlight" mr="0.5rem" />
          Sleep Time has been tracked for today!
        </Text>
      )}

      {/* SELECTOR COMPONENT */}
      {loadState === "unset" && (
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          w="75%"
          m="auto"
          my="1rem"
        >
          {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((hour, index) => {
            return (
              <Button
                _active={{ color: "black" }}
                _focus={{ color: "black" }}
                bg="#082032"
                color="white"
                m="8px"
                h="40px"
                w="40px"
                p="0"
                rounded="lg"
                key={hour}
                onClick={() => sleepTracker(hour)}
              >
                {hour}
              </Button>
            );
          })}
        </Flex>
      )}
    </Card>
  );
};

export default ExpectedSleep;
