//配置一个入口文件
var path = require('path')
var cssLoaders = require('./css-loaders')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist/static'),
        publicPath: '/static/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.css', '.less'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        // preLoaders: [
        //  {
        //    test: /\.vue$/,
        //    loader: 'eslint',
        //    include: projectRoot,
        //    exclude: /node_modules/
        //  },
        //  {
        //    test: /\.js$/,
        //    loader: 'eslint',
        //    include: projectRoot,
        //    exclude: /node_modules/
        //  }
        // ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    vue: {
        loaders: cssLoaders({
            sourceMap: false,
            extract: false
        })
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    }
}
