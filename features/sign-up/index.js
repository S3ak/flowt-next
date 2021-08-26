import { useFormik } from "formik";
import { mutate } from "swr";

import { FormField, Label, Input, Message, Form, Wrapper } from "./styled";
import validationSchema, { signUpFormSchema } from "./validationSchema";
import createAccount, { endPoint } from "./api";

export default function SignUpForm() {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      mobileNumber: "",
    },
    validationSchema,
    onSubmit: ({ email, userName, fullName, mobileNumber }) => {
      const nameArr = fullName.split(" ");
      const firstName = nameArr[0];
      const lastName = nameArr[nameArr.length - 1];

      mutate(endPoint, {
        first_name: firstName,
        last_name: lastName,
        email,
        handle: userName,
        mobile_number: mobileNumber,
      });

      createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        handle: userName,
        mobile_number: mobileNumber,
      });
    },
  });

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
