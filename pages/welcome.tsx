import Layout from "components/Layout";
import React, {
  BaseSyntheticEvent,
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { CSSObject } from "@chakra-ui/styled-system";
import Card from "components/Card";
import FormButton from "components/FormButton";
import { Field, Form, Formik, FormikFormProps, FormikHelpers, FormikProps, useFormik } from "formik";

const Welcome = () => {
  const inputStyles: CSSObject = {
    border: "1px solid red",
  };

  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const [stepNumber, setStepNumber] = useState(0);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };

  const nextStep = () => {
    stepNumber < formSteps.length && setStepNumber((x) => x + 1);
    return;
  };

  const prevStep = () => {
    stepNumber > 0 && setStepNumber((x) => x - 1);
    return;
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((x) => ({
      ...x,
      [event.target.name]: event.target.value,
    }));
    console.log(formState);
  };

  const formSteps: JSX.Element[] = [
    <>
    <Field name="firstname">
     {(field: any) => <FormControl id="firstname" my="1rem">
        <Input
          placeholder="First Name"
          name="firstname"
          value={formState.firstname}
          onChange={inputHandler}
          borderColor="Background"
          required
          {...field}
        />
      </FormControl>}
      </Field>
      <FormControl id="lastname" my="1rem">
        <Input
          placeholder="Last Name"
          name="lastname"
          borderColor="Background"
          value={formState.lastname}
          required
          onChange={inputHandler}
        />
      </FormControl>
      <FormControl id="age" my="1rem">
        <Input
          placeholder="Age"
          type="date"
          name="age"
          borderColor="Background"
          value={formState.age}
          required
          onChange={inputHandler}
        />
      </FormControl>
      <FormButton
        formActionType="Next"
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </>,
    <>
      <FormControl id="Weight" my="1rem">
        <Input
          placeholder="Weight"
          type="number"
          name="weight"
          borderColor="Background"
          value={formState.age}
          required
          onChange={inputHandler}
        />
      </FormControl>
    </>,
  ];

  return (
    <Layout isFlexCentered hasBottomNavbar={false}>
      <Box w="75%" m="auto">
        <Heading p="1rem" color="Highlight">
          Hello, Please Enter Your Details to Continue.
        </Heading>
        <Card>
          <Formik
            initialValues={{ firstname: "", lastname: "", dateofbirth: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
            render={({handleSubmit, handleChange}) => (
              <form onSubmit={handleSubmit}>

              </form>
            )}
          >
            
          </Formik>
        </Card>
      </Box>
    </Layout>
  );
};

export default Welcome;
