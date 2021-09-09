import { useState } from "react";
import { useFormik } from "formik";

import Link from "next/link";

import { FormField, Label, Input, Message, Form, Wrapper } from "./styled";
import validationSchema, { signInFormSchema } from "./validationSchema";
import { useRouter } from "next/router";

export default function SignInForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { push } = useRouter();

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      try {
        // const { data } = await signIn({
        //   email,
        //   password,
        // });

        setIsSuccess(true);
      } catch (error) {
        setError(error);
      }

      push("/home");
      debugger;
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
        <div>Successfully signed in</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {signInFormSchema.map(({ id, label, type, placeholder }) => {
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

        <br />
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </Form>
    </Wrapper>
  );
}
