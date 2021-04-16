const path = require('path')

const webpack = require('webpack')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const define = (o) => {
	const result = {}

	for (const i in o) {
		if (Object.prototype.hasOwnProperty.call(o, i)) {
			result[i] = JSON.stringify(o[i])
		}
	}

	return result
}

module.exports = {
	bundleAnalyzer: () =>
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
		}),

	define: () => ({
		development: new webpack.DefinePlugin(
			define({
				__PRODUCTION: false,
			})
		),

		production: new webpack.DefinePlugin(
			define({
				__PRODUCTION: true,
			})
		),
	}),

	copyWebpack: (appDir, buildPath) => {
		return new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(appDir, './static/'),
					to: buildPath,
				},
			],
		})
	},

	htmlWebpack: (appDir, buildPath) => {
		return new HtmlWebpackPlugin({
			title: 'TNG',
			version: new Date().getTime(),
			inject: false,
			filename: path.resolve(buildPath, 'index.html'),
			template: path.resolve(appDir, 'src/templates/index.hbs'),
		})
	},
}
