module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.json$/,
        type: 'javascript/auto', // Necessary for JSON handling in Webpack
        use: 'json-loader', // Loader to process JSON files
      },
    ],
  },
};