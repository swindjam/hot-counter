const webpack = require('webpack');

module.exports = {
    entry: {
      main: "./src/entry.js",
      component: './src/componentEntry.js'
    },

    output: {
        path: __dirname + "/build",
        filename: "[name].js",
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
