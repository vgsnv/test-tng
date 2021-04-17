const path = require('path')

module.exports = {
	target: 'web',
	devtool: 'source-map',

	entry: {
		app: './src/index.tsx',
	},

	module: {
		rules: [
			{
				test: /(\.ts|\.tsx)/,
				loader: 'ts-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude: [path.resolve(__dirname, 'node_modules')],
			},
			{
				test: /\.(png|jpg|gif|svg|webm|eot|woff|ttf)$/i,
				type: 'asset/resource',
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[hash].[ext]',
							outputPath: 'assets',
							publicPath: '/assets/',
							// context: '',
						},
					},
				],
			},
		],
	},

	resolve: {
		alias: {
			api: path.resolve(__dirname, 'src/api'),
			assets: path.resolve(__dirname, 'src/assets'),
			components: path.resolve(__dirname, 'src/components'),
			constants: path.resolve(__dirname, 'src/constants'),
			config: path.resolve(__dirname, 'src/config'),
			pages: path.resolve(__dirname, 'src/pages'),
		},

		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
}
