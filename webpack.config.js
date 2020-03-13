const   path    = require('path'),
        webpack = require('webpack');

module.exports = {
    mode : 'development',
    entry : {
        // react render

        ssr : './src/front_bundle_entry/ssr.js'
       
    },
    output: {
        path : path.resolve(__dirname, "./public/dist/"),
        filename : '[name]-bundle.js'
    },
    module:{
        rules:[

            {
                test: /\.(html)$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: true,
                        collapseWhitespace: false
                    }
                }]
            }

            ,

            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }

            ,

            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [{
                    loader: 'url-loader?limit=100000',
                    options: {
                        name: '[name].[ext]',
                        outputPath: path.resolve(__dirname, "./webpack/files")
                    }
                }]
            }

            ,

            // exposing jQuery to global
            {
                test: /jQuery.+\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }

            ,

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
       ]
    }, 
    watch : true
}