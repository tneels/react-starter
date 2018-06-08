const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: 'css-loader',
						query: {
							sourceMap: true
						}
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}]
				}))
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true }), // this means dist/style.css
	]
}
