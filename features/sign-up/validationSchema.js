import * as Yup from "yup";

const mobileRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const signUpvalidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mobileNumber: Yup.string()
    .matches(mobileRegExp, "Mobile number is not valid")
    .required("Required"),
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

export const signUpFormSchema = [
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
    id: "mobileNumber",
    label: "Mobile number",
    type: "tel",
    placeholder: "08312345678",
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

export default signUpvalidationSchema;
