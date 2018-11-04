const webpack = require('webpack');
const path = require('path');
const  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        open: true
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/index.html'}
        ])
    ]
    
}