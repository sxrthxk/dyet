import { Checkbox, useCheckbox } from "@chakra-ui/checkbox";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useAuth } from "contexts/AuthContext";
import { workoutTrackerCRUD } from "lib/controllers/rtdbCRUD";
import React, {
  ChangeEvent,
  useEffect,
  useState,
} from "react";
import Card from "./Card";
import CustomSpinner from "./CustomSpinner";
import HomeHeading from "./HomeHeading";
import Tracked from "./Tracked";

const WorkoutTracker = () => {
  const [workoutTracked, setWorkoutTracked] = useState(false);

  const [loadState, setLoadState] = useState<"loading" | "set" | "unset">(
    "loading"
  );

  const { isUser } = useAuth();

  useEffect(() => {
    const date = new Date().toDateString();
    if (isUser) {
      workoutTrackerCRUD.getWorkout(date).then((workoutDone) => {
        if(workoutDone) {
          setLoadState("set")
        } else {
          setLoadState("unset")
        }
      });
    }
  });

  type WeekDays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

  type WorkoutSplit = Record<WeekDays, string>;

  const workoutSplit: WorkoutSplit = {
    Mon: "Push",
    Tue: "Pull",
    Wed: "Legs",
    Thu: "Push",
    Fri: "Pull",
    Sat: "Legs",
    Sun: "Rest",
  };

  const day = new Date().toUTCString().slice(0, 3) as WeekDays;

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setWorkoutTracked((x) => !x);
    console.log(e.target.checked);
    await workoutTrackerCRUD.setWorkout(e.target.checked);
    setLoadState("set");
  };

  return (
    <Card>
      <HomeHeading>Track Your Workout 🦍</HomeHeading>
      {loadState === "set" && (
        <Tracked>
          {"Today's workout has been tracked!"}
        </Tracked>
      )}
      {loadState === "loading" && <CustomSpinner />}
      {loadState === "unset" && (
        <Flex my="1rem" mx="auto">
          <Checkbox
            borderColor="black"
            colorScheme="teal"
            isChecked={workoutTracked}
            onChange={changeHandler}
          ></Checkbox>
          <Box fontSize="1rem" pl="2rem" display="inline">
            {new Date().toDateString()} :{" "}
            <Text fontWeight="semibold" display="inline">
              {workoutSplit[day]}
            </Text>
          </Box>
        </Flex>
      )}
    </Card>
  );
};

export default WorkoutTracker;
