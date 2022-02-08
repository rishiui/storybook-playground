import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as MessageListStories from "./MessageList.stories";
import { NO_MESSAGE } from "./constants";
const { NoMessage } = composeStories(MessageListStories);

it("renders pinned tasks at the start of the list", () => {
  render(<NoMessage />);

  expect(screen.getByText(NO_MESSAGE)).toBeInTheDocument();
});
