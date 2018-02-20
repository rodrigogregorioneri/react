const webpack = require('webpack')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + './public',
        filename: './bundle.jsx'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    // resolve: {
      
    //     extensions: ['', '.js','.jsx','.ts', '.tsx', '.json']
    // },
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
            }
        }]
    }
}