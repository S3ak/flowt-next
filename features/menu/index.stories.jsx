import React from 'react';

import NavigationMenu from './index';

export default {
  title: 'Features/Menu',
  component: NavigationMenu,
  argTypes: {},
};

const Template = (args) => <NavigationMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  defaultOpenState: true,
};

export const Secondary = Template.bind({});
Secondary.args = {};
