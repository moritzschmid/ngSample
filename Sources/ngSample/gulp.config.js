'use strict';

module.exports = {
    systemJsConfig: './system.config.js',
    source: {
        folder: './src/ngSample/',
        files: {
            injectables: [
                './dist/www/scripts/angular.min.js',
                './dist/www/app/app.js'
                // ,
                // './dist/www/app/app.route.js'
                
                // './dist/www/scripts/es6-shim.min.js',
                // './dist/www/scripts/shims_for_IE.js',
                // './dist/www/scripts/vendor.min.js',
                // './dist/www/scripts/angular2.min.js',
                // './dist/www/scripts/system.setup.js',
                // './dist/www/css/vendor.min.css',
                // './dist/www/css/app.css'
            ],
            main: [
                './src/ngSample/index.html'
            ],
            systemSetupScript: './src/ngSample/system.setup.js',
            app: {
                everything: ['./src/ngSample/app/**/*', './src/ngSample/system.setup.js','./src/ngSample/index.html'],
                ts: [
                    './src/ngSample/app/**/*.ts'
                ],
                js: [
                    './src/ngSample/app/**/*.js'
                ],
                html: [
                    './src/ngSample/app/**/*.html'
                ],
                css: [

                    './src/ngSample/css/**/*.css'
                ],
                componentCss: [
                    './src/ngSample/app/**/*.css'
                ],
                assets: [
                    './src/ngSample/assets/**/*.*'
                ]
            },
            vendorStylesheets: [
                './src/ngSample/vendor/bootstrap/css/bootstrap.css',
                './src/ngSample/vendor/admin-lte/css/AdminLTE.css',
                './src/ngSample/vendor/admin-lte/css/skins/_all-skins.css',
                './src/ngSample/vendor/font-awesome/css/font-awesome.css',
            ],
            vendorFonts: [
                './src/ngSample/vendor/font-awesome/fonts/*.*',
                './src/ngSample/vendor/bootstrap/fonts/*.*'
            ],
            shim: [
                './node_modules/es6-shim/es6-shim.min.js',
                './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
            ],
            vendorJs: [
                // './src/ngSample/vendor/hammerjs/hammer.js',
                // './src/ngSample/vendor/jquery/jquery-2.1.4.js',
                // './src/ngSample/vendor/jquery/jquery.hammer.js',
                // './src/ngSample/vendor/jquery/jquery.slimscroll.js',
                // './src/ngSample/vendor/bootstrap/js/bootstrap.js',
                // './src/ngSample/vendor/fastclick/fastclick.js',
                // './src/ngSample/vendor/admin-lte/js/app.js'
            ],
            angular2: [
                './node_modules/systemjs/dist/system-polyfills.js',
                './node_modules/angular2/bundles/angular2-polyfills.js',
                './node_modules/systemjs/dist/system.src.js',
                './node_modules/rxjs/bundles/Rx.js',
                './node_modules/angular2/bundles/angular2.dev.js',
                './node_modules/angular2/bundles/http.dev.js',
                './node_modules/angular2/bundles/router.dev.js'
            ],
             angular1: [
                './node_modules/angular/angular.js',
                './node_modules/angular-route/angular-route.js'
                
            ]
        }
    },
    ts: {
        config: './tsconfig.json'
    },
    targets: {
        angular2MinJs: 'angular2.min.js',
        angular1MinJs: 'angular.min.js',
        vendorMinJs: 'vendor.min.js',
        vendorMinCss: 'vendor.min.css',
        buildFolder: './dist/www',
        appFolder: 'app',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};
