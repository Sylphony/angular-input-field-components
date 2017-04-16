const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");

// Common configuration
const commonCfg = {
    module: {
        rules: [
            { 
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "transform-loader?brfs"
                    },
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ["es2015"]
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: [".js"]
    },

    cache: true,

    node: {
        fs: "empty",        // Fixes the node-fs issue
        __dirname: true     // Sets the true directory path
    }
};

// Build configuration
const buildCfg = merge(commonCfg, {
    entry: path.join(__dirname, "src", "field.component"),

    output: {
        path: path.join(__dirname, "dist"),
        filename: "./field.component.min.js"
    }
});

// Configuration for showcasing examples
const exampleCfg = merge(commonCfg, {
    entry: path.join(__dirname, "examples"),

    output: {
        path: path.join(__dirname, "examples"),
        filename: "./build.js"
    }
});

module.exports = function() {
    return [
        buildCfg,
        exampleCfg
    ];
};
