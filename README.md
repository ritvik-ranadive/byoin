![Byoin](src/images/Technical_Documentation.png)
<br/>
Byoin is a web application that offers patients the possibility to use their waiting time in a meaningful way. With this, it is possible to fill out some information about themselves and their condition. This information is transformed into the HL7 FHIR format and can be shared with the infrastructure of the hospital.<br/>

## Implementation:
Platform Independance: It can be used on any machine with a modern web browser like Google Chrome, Mozilla Firefox, Chromium Edge etc.<br/>
Interoperability: The results are formatted in the HL7 FHIR format and can be used by any other application. <br/>
Camera Access: The camera acess is already functional(front and back camera). <br/>
Forms: Information about the patient and condition can already be filled out in the forms. <br/>
Computer Vision: Detection of location and type of condition is WIP. <br/>

## Deployment Details:
The web application has already been deployed on Amazon Web Service Amplify and can be accessed using any web browser using any of the common platforms like mobile phones, PCs, tablets etc. <br/>
It can be accessed using the following QR code: <br/>
![ByoinQR](src/images/qrcode.png)

## Software Information:
Nodejs: v10.18.0 <br/>
The application should work with higher versions of nodejs as well but we have tested it on v10.18.0
Semantic UI React: v0.88.2 for the styling of the User Interface <br/>
ReactJS: v16.12.0 for building the web application <br/>
React-HTML5-Camera-Photo: v1.5.4 for accessing the front and back camera <br/>

## Installation:
User needs to first install nodejs. The application should work with higher 
versions of nodejs as well but we have tested it on v10.18.0.
This version can be downloaded from the following link:
https://nodejs.org/en/blog/release/v10.18.0/

After installing nodejs user can clone the repository using
the following command:
### `git clone https://github.com/ritvik-ranadive/byoin.git`

Then run the following command under byoin directory:
### `npm install`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## References for the images
<a href="https://www.freepik.com/free-photos-vectors/icon">Icon vector created by brgfx - www.freepik.com</a> <br/>
<a href="https://www.freepik.com/free-photos-vectors/design">Design vector created by freepik - www.freepik.com</a> <br/>
<a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by photoroyalty - www.freepik.com</a> <br/>
<a href="https://www.freepik.com/free-photos-vectors/design">Design vector created by freepik - www.freepik.com</a> <br/>

