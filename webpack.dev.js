const path = require('path')
const { merge } = require('webpack-merge')
const buildPath = path.resolve(__dirname, 'public')

const plugins = require('./webpack/plugins')

const baseConfig = require('./webpack.base.js')

const config = {
	mode: 'development',

	output: {
		filename: '[name].js',
		path: buildPath,
		chunkFilename: '[name].js',
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'initial',
				},
			},
		},
	},

	plugins: [
		plugins.bundleAnalyzer(),
		plugins.copyWebpack(__dirname, buildPath),
		plugins.define().development,
		plugins.htmlWebpack(__dirname, buildPath),
	],

	devServer: {
		contentBase: './public',
		compress: true,
		port: 3002,
		historyApiFallback: true,
		proxy: {
			'/api/v1': 'http://localhost:8080',
		},
	},
}

module.exports = merge(baseConfig, config)
