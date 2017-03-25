// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: "./src/entry.js",

    output: {
        path: __dirname + "./build",
        filename: "main.js",
        publicPath: "/build"
    },

    module: {
        rules: [
          {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /\/node_modules\//
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]-[local]!sass-loader' // loaders to preprocess CSS
            }
        ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
      port: 3333,
      inline: true,
      hot: true,
      open: true,
      // contentBase: "./html"
    }
};
