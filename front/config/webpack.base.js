const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/',
}

module.exports = {
    // set value through webpack config files
    externals: {
        paths: PATHS
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.js'
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },

    entry: {
        app: `${PATHS.src}/main.js`,
    },
    output: {
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
        chunkFilename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, importLoaders: 1 }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            template: path.resolve(__dirname, "../public", "index.html"),
            favicon: "./public/favicon.ico",
        }),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`,
            chunkFilename: `${PATHS.assets}css/[name].[hash].css`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` }
            ]
        }),
      ],
}