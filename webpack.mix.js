let mix = require('laravel-mix');

var LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
	plugins: [
	  new LiveReloadPlugin()
  ]
});

mix
	.js('src/js/index.js', 'www/js')
	.sass('src/sass/index.scss', 'www/css')
	.disableSuccessNotifications();