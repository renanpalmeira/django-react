var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    debug: true,
    context: __dirname,
    entry: path.resolve('./static/js/index.jsx'),
    output: {
        path: path.resolve('./static/bundles/'),
        filename: "[name]-[hash].js",
        //filename: "bundle.js"
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js','.jsx']
    },
}