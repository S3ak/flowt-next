import { useState } from "react";
import { useFormik } from "formik";

import { Wrapper } from "./styled";
import validationSchema, { signUpFormSchema } from "./validationSchema";
import createAccount from "./api";

import { errorTypes } from "../../libs/config";

import Form from "../../components/form";
import InputField from "../../components/form/input-field";

export default function SignUpForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onSetError = (argError) => {
    setError(argError);
    trackError(argError, errorTypes.network);
  };

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
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
        debugger;

        try {
          const { data } = await createAccount({
            first_name: firstName,
            last_name: lastName,
            email,
            handle: userName,
            mobile_number: mobileNumber,
          });

          setIsSuccess(true);
        } catch (error) {
          onSetError(error);
        }

        resetForm();
      },
    });

  if (error) {
    return (
      <Wrapper>
        <div>Something went wrong</div>
      </Wrapper>
    );
  }

  if (isSuccess) {
    return (
      <Wrapper>
        <div>
          You&apos;ve been registered, Get ready to start receiving money
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
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

        <button type="submit">Submit</button>
      </Form>
    </Wrapper>
  );
}
