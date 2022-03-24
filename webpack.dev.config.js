'use strict';
const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


const dev = merge(baseConfig, {
    mode: 'development',
    devServer: {                                        // Live reload + что-то в оперативке хранит
        static: [{
            directory: path.join(__dirname, '/'),         // Следит за файлам из заданной директории, (откуда взять html, картинки и т.п),
            publicPath: '/'
        }],
        
        client: {
            overlay: true
        }
     },
     plugins: [
         new webpack.SourceMapDevToolPlugin({
             filename: '[file].map'
         })
     ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(dev);
});
    
