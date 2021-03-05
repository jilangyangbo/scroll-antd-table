module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js",
        libraryTarget: "umd",
        library: 'scroll-antd-table',
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'antd': 'antd'
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: '/node-modules/'
            }
        ]
    },
}