'use strict';
const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


const dev = merge(baseConfig, {
    mode: 'development',
    devServer: {   
        inline: true,
    hot: true,         
                               // Live reload + что-то в оперативке хранит
        // static: [{
        //     directory: baseConfig.externals.paths.dist,         // Следит за файлам из заданной директории, (откуда взять html, картинки и т.п),
        //     // publicPath: ''
        // }],
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
    
