import React from "react";

import Tag from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Tag {...args} />;

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  size: "sm",
  text: "This is a default tag",
};

export const MediumGreenTag = Template.bind({});
MediumGreenTag.args = {
  size: "md",
  text: "This is a medium green tag",
  backgroundColor: "#47af46",
};

export const LargeOrangeTag = Template.bind({});
LargeOrangeTag.args = {
  size: "lg",
  text: "This is a large orange tag with custom color",
  backgroundColor: "#f87d23",
  fontColor: "##f7f7f7",
};
