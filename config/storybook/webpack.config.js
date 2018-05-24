const path = require('path');

module.exports = (baseConfig, configType) => {
	[
		{
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: true,
						localIdentName: '[name]__[local]__[hash:base64:5]',
					},
				},
				{
					loader: 'postcss-loader',
					options: {
						ident: 'postcss',
						plugins: () => [
							require('postcss-flexbugs-fixes'),
							autoprefixer({
								flexbox: 'no-2009',
							}),
						],
					},
				},
			],
		},
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: true,
						sourceMap: true,
						importLoaders: 2,
						localIdentName: '[name]__[local]__[hash:base64:5]',
					},
				},
				'sass-loader',
			],
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: ['file-loader'],
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		},
	].forEach((rule) => baseConfig.module.rules.push(rule));
	return baseConfig;
};
