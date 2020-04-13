# JavaScript Techdegree Project #7: React Gallery App

## Description

For this project, I used the popular library React to create an image gallery app that fetches images from flickr using [axios](https://github.com/axios/axios). Routes are set up with React Router for default topics/tags (Lakes, Mountains, Trees) and a search route which enables the user to search for photos of their choice.  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A live version of this project can be found [here](https://rliess-react-gallery.netlify.app/).

## Technologies Used

- JavaScript
- React
- React Router
- Create React App
- Axios
- Flickr API

## Installation

- Download or clone from Github
- Copy `Config.js` from `./install` to `./src` and add your flickr API key
- run `npm install`
- run `npm start` to start the development server. The website can then be accessed locally by pointing the web browser to  `localhost:3000`

## Some Additional remarks

- Added flickr photo title both as `alt` and `title`(tooltip) attributes
- Added transition hover effects to all buttons using flickr brand colors
- Added a 404/not-found route
- Added a component that displays a friendly message if a search doesn't produce any results
- Added a flickr spinner from [https://loading.io](https://loading.io) ([CC0 - Creative Commons license](https://creativecommons.org/share-your-work/public-domain/cc0/))
- Added an error route in case of a fetch or network error

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
