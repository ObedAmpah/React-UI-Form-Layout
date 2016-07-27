var webpack = require('webpack');

module.exports = {
	entry: [
		'./src/App.js'
	],
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [

			{ test: /\.jsx?$/, loader: 'babel-loader', query: { compact: false } },
			{ test: /\.css?$/, loaders: ['style-loader', 'css'] },
			{ test: /\.scss?$/, loaders: ['style-loader', 'css', 'sass']}
		]
	},
	plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
}