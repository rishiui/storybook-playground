# Getting Started with Storybook 📕📖


## Storybook setup ⚓️

Make sure your react app ✅ is setup before setting you storybook. In the project directory, you can run:

```
npx sb init
```


## Start storybook ✈️

```
npm start storybook
```


## Storybook setup for automated snapshot testing 🧩

```
npm add -D @storybook/addon-storyshots react-test-renderer
```


In scr/ create a file storybook.test.js and add the following code:

```
import initStoryshots from '@storybook/addon-storyshots';`
initStoryshots();
```


## To Run automated tests 🧪

```
npm test <path to storybook.test.js>
```


## To update snapshots 🧩

```
npm test -- -u
```


## Setting up react testing library 🔥 for storybook 

```
npm install @storybook/testing-react
```

```
//👇👇Import React Testing Library below for testing the story👇👇
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";

//Import your *.stories.js file below
import * as YourStories from "./YourStories.stories";

//StoryYouWantToTest is the story that will be rendered to test by react testing library.
const { StoryYouWantToTest } = composeStories(YourStories);

it("renders pinned tasks at the start of the list", () => {
  render(<StoryYouWantToTest />);
  // code for testing goes here...
});
```


## Deployment on chromatic 

```
npm run build-storybook
```
```
npm i chromatic
```
Copy the token
```
npm chromatic --project-token=<token>
```

