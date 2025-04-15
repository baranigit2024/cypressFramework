const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor');

// Define Webpack options for Babel loader
const webpackOptions = {
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Enable modern JavaScript features
          },
        },
      },
    ],
  },
};

// Cypress configuration
module.exports = defineConfig({
  video: true, // Enable video recording for tests

  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login', // Base URL for tests
    specPattern: 'cypress/test/*.js', // Test file pattern
    setupNodeEvents(on, config) {
      // Attach Webpack preprocessor
      on('file:preprocessor', webpack({ webpackOptions }));
    },
  },

  env: {
    usrName: 'user', // Environment variable for username
    passWord: 'pass', // Environment variable for password
  },
});