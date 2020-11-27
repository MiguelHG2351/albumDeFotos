const path = require('path')
const HtmlWebackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: ['react-hot-loader/patch', './src'],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        port: 3000,
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },

    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    
    module: {
        // noParse: [
        //     new RegExp(lib_dir + './react.js'), 
        //     new RegExp(lib_dir + './react-dom.js')
        // ],
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.json5$/i,
                loader: 'json5-loader',
                type: 'javascript/auto'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebackPlugin({
            template: './src/index.html'
        })
    ]
}