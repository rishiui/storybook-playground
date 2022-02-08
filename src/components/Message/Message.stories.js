import React from "react";

import Message from "./Message";

export default {
  title: "Components/Message",
  component: Message,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Message {...args} />;

export const DefaultMessage = Template.bind({});
DefaultMessage.args = {
  messageDetails: {
    senderId: "123",
    senderImageUrl: "https://avatars.githubusercontent.com/u/1500684?v=4",
    senderName: "Kent C. Dodds",
    senderMessage:
      "Hey, I have created React Testing library do give it a shot...",
  },
};

export const LengthyMessage = Template.bind({});
LengthyMessage.args = {
  messageDetails: {
    senderId: "456",
    senderName: "Unknown user",
    senderMessage: `Now is the winter of our discontent Made glorious summer by this sun of York;
    And all the clouds that lour'd upon our house In the deep bosom of the ocean buried.
    Now are our brows bound with victorious wreaths`,
  },
};
