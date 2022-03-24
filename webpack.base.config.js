const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATHS = {
    src: path.join(__dirname, '/src'),
    dist: path.join(__dirname, '/dist'),
    assets: 'assets/'
};

let config = {
    externals: {
        paths: PATHS
    },
    entry: {                                            // Входная точка(и)
        app: path.resolve(PATHS.src, 'js/main.js')
    },
    output: {                                           // Выходная точка(и)  path.resolve(__dirname, 'dist')
        path: PATHS.dist,                               
        filename:  path.join(PATHS.assets, 'js/[name].js'),
        publicPath: '/'                             // Путь, который будет указываться в браузере для подключения документтов т.е http://server/dist/[name].js(можно указывать в DevServer) 
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
            test: /\.(png|jpe?g|gif)$/,
            
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
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
        filename: path.join(PATHS.assets, 'css/[name].css'),
    }), new HtmlWebpackPlugin({
        title: 'WebpackHtmlPLugin',
        hash: false,
        minify: false,
        template: path.join(PATHS.src, '/index.html'),
        filename: 'index.html'
        
    }), new CopyWebpackPlugin({
        patterns: [
            {from: path.join(PATHS.src, 'img'), to: path.join(PATHS.assets, 'img')}
        ]
    })]
};

module.exports = config;