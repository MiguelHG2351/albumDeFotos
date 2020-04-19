const path = require('path')
const html = require('html-webpack-plugin')

module.exports = {
    entry: {
        build: './public/static/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    devServer: {
        port: 5500
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    },
    plugins: [
        new html({
            template: './public/index.html'
        })
    ]
}