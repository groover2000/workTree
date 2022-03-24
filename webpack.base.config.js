const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


let config = {
    entry: {                                            // Входная точка(и)
        app: './src/js/main.js'
    },
    output: {                                           // Выходная точка(и)
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist'                             // Путь, который будет указываться в браузере для подключения документтов т.е http://server/dist/[name].js(можно указывать в DevServer) 
    },
   
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },{
            test:/\.s[ac]ss$/,
            use: [
                {
                    loader:MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 
                {
                    loader:'css-loader'
                }, 
                {
                    loader:'sass-loader'
                },
                {
                    loader: 'postcss-loader'
                }]
        },{
            test:/\.css$/,
            use: [
               
                {
                    loader:MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    }
                }, 
                {
                    loader:'css-loader'
                },
                {
                    loader: 'postcss-loader'
                }]
        }],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
    })],
   

};

module.exports = config;