var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'public/build/bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.css?$/,
                exclude: /(node_modules)/,
                loader: ['css-loader', 'style-loader'],
            }
        ]




    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js", ".jsx", ".json", ".css"]
    }
}
