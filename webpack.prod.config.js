'use strict';
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


const prod = merge(baseConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }
    
   
});

module.exports = new Promise((resolve, reject) => {
    resolve(prod);
});
    