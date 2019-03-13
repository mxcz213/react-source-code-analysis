const path = require('path');

module.exports = {
    devtool:'cheap-module-eval-source-map',
    mode:'development',
    entry: {
        index: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include:[
                    path.resolve(__dirname,'src')
                ],
                use:['babel-loader']
            }
        ]
    },
    performance: {
        hints: false,
        maxAssetSize: 200000,
        maxEntrypointSize: 400000,
        assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
};