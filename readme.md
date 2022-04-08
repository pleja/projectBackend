## Top 100 Crypto Updates from Coin Market Cap - Express Back-End

This back-end obtains coin market cap API data via axios. It then serves the data to the React-Front which displays it based on a search query.

## Dependancies / Requirements

nodejs
express
axios
cors
nodemon (optional)

## Setup

An API Key from Coin Market Cap is REQUIRED! You can obtain one from https://pro.coinmarketcap.com/login

Make sure nodejs is installed. in your console install and launch the following:

    npm init
    npm install express
    npm install axios
    npm install cors
    npm install -g nodemon 

Next, open app.js and on line 18 paste your API key from coin market cap in the space provided.

you may start the app with:

    nodemon app.js

Once your server is running, you may initiate the Front-end.
