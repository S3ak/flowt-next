/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { string } from "yup/lib/locale";

import Button from "./index";

export default {
  title: "Features/Form/Button",
  component: Button,
  argTypes: {
    text: string,
    size: ["small", "medium"],
    kind: ["default"],
  },
};

const Template = (args) => <Button {...args}>CTA text!</Button>;

export const Primary = Template.bind({});
Primary.args = {};
