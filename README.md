# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Personal Logs
Used to confirm/phrase certain concepts for personal understanding and future referencee if needed
- Prop input values should never be modified (read-only). Component functions should be pure
- componentDidMount (will run after component has been rendered to the DOM once only) for setting up - if setState is involved, render method will be call as well to update content (applicable for class component) and componentWillUnmount for cleaning after it is not used for freeing up resources. These are life cycle methods
- Props and state values may be updated asynchronously, so should not rely on their values for next value. Solution is to use second form of setState that passes a function instead of object
- Data flows down (parent to child component) and compoent will not know where it came from or manually typed
- If want to prevent a specific component from being rendered with conditional rendering, can return null before render method in class component as well
- useEffect is a combination of componentDidMount, componentWillUnmount and etc (a few more)
