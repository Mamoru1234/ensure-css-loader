const path = require('path');

module.exports = {
    entry: {
        main: path.resolve('./src/index.js')
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }]
            }
        ]
    }
};
