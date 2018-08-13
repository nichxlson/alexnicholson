const { mix } = require('laravel-mix');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

const banner = 'Copyright (c) ' + new Date().getFullYear() + ' alexnicholson.co.uk';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('public/assets');

mix.options({
    processCssUrls: false
});

mix.sass('resources/scss/main.scss', './css');

mix.js('resources/javascript/app.js', './js/main.js');

mix.webpackConfig({
    plugins: [
        new CopyWebpackPlugin([{
            from: 'resources/images',
            to: './img',
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            plugins: [
                imageminMozjpeg({
                    quality: 90,
                })
            ]
        }),
        new webpack.BannerPlugin(banner)
    ]
});

if(mix.inProduction()) {
    mix.version();
} else {
    mix.disableNotifications();
}

mix.browserSync({
    proxy: 'alexnicholson.test',
    port: 3100,
    files: [
        'public/index.html',
        'public/assets/**/*.css',
        'public/assets/**/*.js'
    ]
});