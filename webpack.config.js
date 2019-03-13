module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry: {
        index: './src/index.jsx'
    },
    output: {
        path: './dist/',
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
};