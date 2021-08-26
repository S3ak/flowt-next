import { useState } from "react";
import { useFormik } from "formik";

import { FormField, Label, Input, Message, Form, Wrapper } from "./styled";
import validationSchema, { signUpFormSchema } from "./validationSchema";
import createAccount from "./api";

export default function SignUpForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
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

        setIsSuccess(true);
      } catch (error) {
        setError(error);
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
            <FormField key={id}>
              <Label htmlFor={id}>{label}</Label>

              <Input
                id={id}
                name={id}
                type={type}
                value={values[id]}
                placeholder={placeholder}
                onChange={handleChange}
              />

              {errors[id] && touched[id] && <Message>{errors[id]}</Message>}
            </FormField>
          );
        })}

        <button type="submit">Submit</button>
      </Form>
    </Wrapper>
  );
}
