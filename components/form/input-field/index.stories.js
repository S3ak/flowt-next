/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import InputField from "./index";

export default {
  title: "Features/Form/Input Field",
  component: InputField,
  argTypes: {},
};

const Template = (args) => <InputField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "mockName",
  val: "Mock Value",
  message: "Validation Message",
  hasError: false,
  isSuccess: false,
  placeholder: "Mock placeholder",
};
