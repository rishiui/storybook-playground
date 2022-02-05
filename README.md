# Getting Started with Storybook


## Storybook setup

In the project directory, you can run:
### `npx sb init`


## Start storybook

### `npm start storybook`


## Storybook setup for automated snapshot testing

### `npm add -D @storybook/addon-storyshots react-test-renderer`


In scr/ create a file storybook.test.js and add the following code:

### `import initStoryshots from '@storybook/addon-storyshots';`
### `initStoryshots();`


## To Run automated tests
### `npm test`


## To update snapshots
### `npm test -- -u`
