const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    //Point d'entrée JS, fichier qui contiendra les includes.
    entry: {
        front: './assets/js/front/main.js',
        admin: './assets/js/admin/main.js',
    },
    //Objet contenant le chemin de sortie, ainsi que le nom à donner au fichier
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: "./js/[name]-bundle.js",
        publicPath: '',
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            import: true,
                            url: false,
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: 'img/',
                            publicPath: 'build/img',
                        }
                    },
                ]
            },
        ],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/[name].css",
        }),

        new CopyPlugin({
           patterns: [
               { from: 'assets/css/img/', to: 'img/',}
           ]
        }),
    ]
}