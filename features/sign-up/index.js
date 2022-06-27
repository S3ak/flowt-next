import { useState } from "react";
import { useFormik } from "formik";

import { Wrapper } from "./styled";
import validationSchema, { signUpFormSchema } from "./validationSchema";
import createAccount from "./api";

import { errorTypes } from "../../libs/config";
import Card from "../../components/card";
import Text from "../../components/text";
import Title from "../../components/title";

import Form from "../../components/form";
import InputField from "../../components/form/input-field";
import Button from "../../components/form/button";
import toastAlert from "../../libs/utils/toast";

export default function SignUpForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      mobileNumber: "",
    },
    validationSchema,
    onSubmit: async ({ email, userName, fullName, mobileNumber }) => {
      const nameArr = fullName.split(" ");
      const firstName = nameArr[0];
      const lastName = nameArr[nameArr.length - 1];

      try {
        const { data } = await createAccount({
          first_name: firstName,
          last_name: lastName,
          email,
          handle: userName,
          mobile_number: mobileNumber,
        });

        console.warn(`Create Account response ${data}`);

        setIsSuccess(true);
      } catch (error) {
        setError(error);
        trackError(error, errorTypes.network);
        toastAlert({
          alert: errorTypes.network,
          message: "Could not create an account. We will let the devs know",
        });
      }

      resetForm();
    },
  });

  if (error) {
    return (
      <Wrapper>
        {/* TODO: Add icon */}
        <Card>Something went wrong</Card>
      </Wrapper>
    );
  }

  if (isSuccess) {
    return (
      <Wrapper>
        <Card>
          You&apos;ve been registered, Get ready to start receiving money
        </Card>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title inverse>Sign up</Title>

      <Card>
        <Text variant="subheading">Sign up to start sending money</Text>

        <Text>
          Signing up is free in less than 5 minutes. No contracts, no monthly
          fees, no nonsense. Start sending and recieving money across South
          Africa fast and easy.
        </Text>
      </Card>

      <Card>
        <Form onSubmit={handleSubmit}>
          {signUpFormSchema.map(({ id, label, type, placeholder }) => {
            return (
              <InputField
                name={id}
                key={id}
                label={label}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                val={values[id]}
              />
            );
          })}

          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    </Wrapper>
  );
}
