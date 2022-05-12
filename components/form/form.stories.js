/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Form from "./index";

import InputField from "./input-field";
import Button from "./button";

export default {
  title: "Features/Form/SignUp",
  component: Form,
  argTypes: {},
};

const Template = (args) => (
  <Form {...args}>
    <InputField name="firstName" />
    <InputField name="lastName" />
    <InputField name="firstName" />
    <Button />
  </Form>
);

export const Primary = Template.bind({});
Primary.args = {};
