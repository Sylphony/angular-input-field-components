var webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",

    output: {
        path: __dirname,
        filename: "./src/build.js"
    },

    cache: true,
    
    module: {
        rules: [
            { 
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },

    resolve: {
        extensions: [".js"]
    },

    node: {
        fs: "empty",        // Fixes the node-fs issue
        __dirname: true     // Sets the true directory path
    }
};
