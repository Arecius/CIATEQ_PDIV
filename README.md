# CIATEQ Procesamiento Digital de Imagen y Video
Small web app that applies differente filters to an image trough Octave

## Installation

yarn is strongly recommended to install dependencies of this app
```
npm install -g yarn
```
Dependency installation

```
yarn install
```

## Running the app

To run the server 
```
yarn run serve
```
To change the url change the value of the constant of the octave web service
on src/index.js
```
const webOctave = 'http://localhost:8081/api';
```
The port of the web server can be changed on the script defintion on the package.json file
```
"serve": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --host 0.0.0.0 --port 8003  --inline",

```

## Using the App

The app should be available on http://localhost:8003 by default or http://localhost:port if other port is configured


