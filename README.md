# youvisit
YouVisit react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### 'git clone https://github.com/faizan-anwer/youvisit/'

### 'cd youvisit'

### `npm install`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080/login](http://localhost:8080/login) to view it in the browser.


All source code for the YouVist React app test is located in the /src folder. Inside the src folder there is a folder per feature (App, HomePage, LoginPage, RegisterPage) and a bunch of folders for non-feature code that can be shared across different parts of the app (actions, components, constants, helpers, reducers, services).

I keep the project folder structure shallow so it's quick to see everything at a glance from the top level and to navigate around the project.

The index.js files in each folder are barrel files that group all the exported modules together so they can be imported using the folder path instead of the full module path and to enable importing multiple modules in a single import (e.g. import { userActions, alertActions } from '../actions').

Heirarchy and the architecture of project is as follows :

### `src`
### `actions`
`alert.actions.js`
`index.js`
`user.actions.js`
### `components`
`index.js`
`PrivateRoute.js`
### `constants`
`alert.constants.js`
`index.js`
`user.constants.js`
### `helpers`
`auth-header.js`
`fake-backend.js`
`history.js`
`index.js`
`store.js`
### `reducers`
`alert.reducer.js`
`authentication.reducer.js`
`index.js`
`registration.reducer.js`
`users.reducer.js`
### `services`
`index.js`
`user.service.js`
`App`
`App.js`
`index.js`
`HomePage`
`HomePage.js`
`index.js`
`LoginPage`
`index.js`
`LoginPage.js`
`RegisterPage`
`index.js`
`RegisterPage.js`
`index.html`
`index.js`
`.babelrc`
`package.json`
`webpack.config.js`
 
### Redux Actions Folder
Path: /src/actions
The actions folder contains all the Redux action creators for the project, I've organised the action creators into different files by action type (e.g. user actions, alert actions etc).

### Redux Alert Action Creators
Path: /src/actions/alert.actions.js
Contains Redux action creators for actions related to alerts notifications in the application. For example to display a success alert message with the text 'Registration Successful' you can call dispatch(alertActions.success('Registration successful'));.

I've wrapped the action methods in an alertActions object at the top of the file so it's easy to see all available actions at a glance and simplifies importing them into other files.

### Redux User Action Creators
Path: /src/actions/user.actions.js
Contains Redux action creators for actions related to users. Public action creators are exposed via the userActions object at the top of the file and function implementations are located below, I like this structure because you can quickly see all of the actions that are available.

Most of the actions for users are async actions that are made up of multiple sub actions, this is because they have to make an http request and wait for the response before completing. Async actions typically dispatch a request action before performing an async task (e.g. an http request), and then dispatch a success or error action based on the result of the async task.

### React Components Folder
Path: /src/components
The components folder contains shared React components that can be used anywhere in the application.

### React Private Route Component
Path: /src/components/PrivateRoute.js
The react private route component renders a route component if the user is logged in, otherwise it redirects the user to the /login page.

The way it checks if the user is logged in is by checking that there is a user object in local storage. While it's possible to bypass this check by manually adding an object to local storage using browser dev tools, this would only give access to the client side component, it wouldn't give access to any real secure data from the server api because a valid authentication token (JWT) is required for this.

### Redux Action Constants Folder
Path: /src/constants
The constants folder contains all of the redux action type constants used by redux action creators and reducers. It could be used for any other constants in the project as well, it doesn't have to be only for redux action types.

### Redux Alert Action Constants
Path: /src/constants/alert.constants.js
The alert constants object contains the redux alert action types used to display and clear alerts in the react application.

### Redux User Action Constants
Path: /src/constants/user.constants.js
The user constants object contains the redux user action types that can be dispatched in the react application, async actions that perform http requests involve a request followed by a success or error response, so each of these three steps is represented by a redux action.

### React Redux Helpers Folder
Path: /src/helpers
The helpers folder contains all the bits and pieces that don't fit into other folders but don't justify having a folder of their own.

### React Auth Header
Path: /src/helpers/auth-header.js
Auth header is a helper function that returns an HTTP Authorization header containing the Json Web Token (JWT) of the currently logged in user from local storage. If the user isn't logged in an empty object is returned.

### React Mock Backend
Path: /src/helpers/fake-backend.js
The fake backend is used for running the without a server api (backend-less). It patches the fetch() function to intercept certain api requests and mock the behaviour of a real api by managing data in browser local storage. Any requests that aren't intercepted get passed through to the real fetch() function.

### React Router History
Path: /src/helpers/history.js
The history is a custom history object used by the React Router, the reason I used a custom history object instead of the built into React Router is to enable redirecting users from outside React components, for example from the user actions after successful login or registration.

### Redux Reducers Folder
Path: /src/reducers
The reducers folder contains all the Redux reducers for the project, each reducer updates a different part of the application state in response to dispatched redux actions.

### React Redux User Service
Path: /src/services/user.service.js
The user service includes all backend api calls for performing CRUD operations on user data, as well as logging and out of the  application. The service methods are exported via the userService object at the top of the file, and the implementation of each method is located in the function declarations.

### React Redux App Component
Path: /src/App/App.js
The app component is the root component for the react tutorial application, it contains the outer html, routes and global alert notification for the example app.


