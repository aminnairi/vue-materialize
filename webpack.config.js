const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = ({
    development, production
}) => {
    let mode = "";

    if (development) {
        mode = "development";
    } else if (production) {
        mode = "production";
    } else {
        mode = "development";
    }

    return {
        entry: path.resolve("src", "index.js"),
        mode,

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
            filename: "index.js",
            path: path.resolve("dist")
        },

        plugins: [new VueLoaderPlugin()]
    };
};
