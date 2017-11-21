var path = require('path');

module.exports = {
	//Inform webpack that we are building a bunle for node js on the server side
	target : 'node',

	//Tell ebpack the root file
	entry : './src/indexBlog.js',
	//Tells webpack where to put the output bundle file 
	output: {
		filename : 'blog.bundle.js',
		path : path.resolve(__dirname, 'dist')
	},

	module : {
		rules : [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react', 
						'stage-0', 
						['env', { targets: {browsers: ['last 2 versions'] }}]
					]
				}
			}
		]
	}
};