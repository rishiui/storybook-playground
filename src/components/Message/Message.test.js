import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

import * as MessageStories from "./Message.stories";
import {NO_PROFILE_IMAGE} from './constants';

const { LengthyMessage } = composeStories(MessageStories);

it("renders pinned tasks at the start of the list", () => {
  render(<LengthyMessage />);

  let image = screen.getByRole("img");
  expect(image).not.toBeNull();
  expect(image).toHaveAttribute('src',NO_PROFILE_IMAGE);
});
