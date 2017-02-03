module.exports = {
    entry: './demo/index.js',
    output: {
        path: 'demo/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: [
                        'transform-flow-strip-types',
                        'transform-class-properties'
                    ]
                }
            }
        ]
    },
};
