const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: ['style-loader', 'css-loader',]
            },
            {
                test: /\.scss$/, use: ['style-loader', {
                    loader: 'css-loader',
                    //获取localIdentName
                    options: {
                        modules: {
                            localIdentName: '[path][name]-[local]-[hash:5]'
                        },
                    }
                },'sass-loader'
                ]
            },
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000'},
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
        alias: {
            '@': path.join(__dirname, './src')//这样@表示项目根目录中src这一层
        }
    }
}