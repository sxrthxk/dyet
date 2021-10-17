import { Button, ButtonProps } from "@chakra-ui/button";
import React from "react";

const FormButton = ({
  children = "Submit",
  formActionType = "Submit",
  nextStep,
  prevStep
}: {
  children?: string | JSX.Element | null;
  formActionType?: "Next" | "Submit" | "Back";
  nextStep?: any;
  prevStep?: any;
}): JSX.Element => {

    const clickHandler = () => {
        if(formActionType === "Next") {
            console.log("next");
            
            nextStep();
            return;
        }
        if(formActionType === "Back") {
            prevStep();
            return;
        }
        return;
    }

  return (
    <Button
      colorScheme="teal"
      bgGradient="linear(to-r, rgba(35, 165, 158, 0.7) 2.67%, rgba(4, 94, 89, 0.7) 97.84%);"
      type="submit"
      onClick={clickHandler}
    >
      {formActionType}
    </Button>
  );
};

export default FormButton;
