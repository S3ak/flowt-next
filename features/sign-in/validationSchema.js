import * as Yup from "yup";

const passwordRegExp = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const signInvalidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too short! - should be 8 chars minimum.")
    .max(32, "Too long! - should be 32 chars maximum.")
    .trim()
    .matches(
      passwordRegExp,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character."
    )
    .required("Required"),
});

export const signInFormSchema = [
  {
    id: "email",
    label: "eMail",
    type: "email",
    placeholder: "name@mail.com",
  },
  {
    id: "password",
    label: "Full name",
    type: "password",
    placeholder: "P@55W0rd",
  },
];

export default signInvalidationSchema;
