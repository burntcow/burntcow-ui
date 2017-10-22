const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Configuration
const assets = 'assets';
const dist   = 'dist';

mix.setPublicPath(dist)
   .setResourceRoot('../');
   
// Assets
mix.sass(`${assets}/styles/app.scss`, `${dist}/styles`)
   .js(`${assets}/scripts/main.js`, `${dist}/scripts`)
   .extract([
     'micromodal/dist/micromodal'
   ]);

// Source maps when not in production.
if (!mix.inProduction()) {
  mix.sourceMaps();
}

// Hash and version files in production.
if (mix.inProduction()) {
  mix.version();
}