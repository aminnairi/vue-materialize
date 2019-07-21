const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const commonConfiguration = {
  entry: path.resolve("src", "index.js"),
  mode: "development",

  module: {
    rules: [
      {
        loader: "vue-loader",
        test: /\.vue$/u
      },

      {
        loader: "babel-loader",
        test: /\.js$/u
      },

      {
        test: /\.s?css$/u,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },

  output: {
    library: "VueMaterializeCSS",
    libraryExport: "default",
    path: path.resolve("dist")
  },

  plugins: [new VueLoaderPlugin()]
};

module.exports = [
  merge(commonConfiguration, {
    output: {
      filename: "index.js",
      libraryTarget: "window"
    },

    target: "web",

		plugins: [new CleanWebpackPlugin()]
  }),

  merge(commonConfiguration, {
    output: {
      filename: "index.common.js",
      libraryTarget: "commonjs"
    },

    target: "node"
  }),

  merge(commonConfiguration, {
    output: {
      filename: "index.js",
      libraryTarget: "window",
      path: path.resolve("docs")
    },

    target: "web"
  })
];
