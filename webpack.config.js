var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry : './src/index.js',
	output : {
		path : __dirname + '/dist',
		filename : 'app.bundle.js',
		publicPath: '/'
	},
	watch : true,
	devServer: {
	      historyApiFallback: true,
	  },
	module : {
		loaders : [
			{
				test: /.jsx?$/, 
				loader : 'babel-loader',
				exclude : /node_modules/,
				query: {
					presets: [
						'react',
						['es2015', {modules : false}]
					]
				}
			}
			/*
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			} 
			*/
		]
	}
};