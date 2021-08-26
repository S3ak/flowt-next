import { useFormik } from "formik";
import { FormField, Label, Input, Message, Form, Wrapper } from "./styled";

import validationSchema from "./validationSchema";

const formSchema = [
  {
    id: "userName",
    label: "User name",
    type: "text",
    placeholder: "You123",
  },
  {
    id: "fullName",
    label: "Full name",
    type: "text",
    placeholder: "Tsholo Mabaso",
  },
  {
    id: "email",
    label: "eMail",
    type: "email",
    placeholder: "you@mail.co.za",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "P@55W0rd1!",
  },
];

export default function SingUp() {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {formSchema.map(({ id, label, type, placeholder }) => {
          return (
            <FormField key={id}>
              <Label htmlFor={id}>{label}</Label>

              <Input
                type={type}
                onChange={handleChange}
                value={values[id]}
                name={id}
                id={id}
                placeholder={placeholder}
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
