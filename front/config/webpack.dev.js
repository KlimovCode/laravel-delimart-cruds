const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    devServer: {
        port: 8081,
        contentBase: baseWebpackConfig.externals.paths.dist,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [],
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})