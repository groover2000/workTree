'use strict';
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


const dev = merge(baseConfig, {
    mode: 'development',
    devServer: {       
        historyApiFallback: {
            disableDotRule: true,
          }, 
        // watchFiles:['src/**/*.html'],                    // Live reload + что-то в оперативке хранит
        static: [{
            directory: baseConfig.externals.paths.src,         // Следит за файлам из заданной директории, (откуда взять html, картинки и т.п),
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
    
