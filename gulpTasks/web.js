
(function () {
    'use strict';

    function RegisterTasks(gulp, config) {

        var gulp = require("gulp"),
            runSequence = require("run-sequence"),
            Builder = require('systemjs-builder'),
            path = require('path'),
            watch = require('gulp-watch'),
            batch = require('gulp-batch'),
            server = require('gulp-server-livereload'),
            inject = require('gulp-inject'),
            concat = require('gulp-concat')

            ;

        // gulp.task('[private-web]:bundle-vendor-scripts', function () {
        //     var builder = new Builder();

        //     return builder.loadConfig(config.systemJsConfig)
        //         .then(function () {
        //             var promises = [];

        //             config.source.files.vendorJs.forEach(function (jsFile) {
        //                 promises.push(builder.bundle(jsFile, path.join(config.targets.buildFolder, 'scripts/bundles/', path.basename(jsFile))));
        //             });

        //             return Promise.all(promises);
        //         })
        // });

        gulp.task('build-web', function (done) {
            return runSequence(
                'clean',
                [
                    //'[private-web]:bundle-vendor-scripts'//,
                    '[private-web]:copy-angular1-scripts',
                    // '[private-web]:copy-system-setup-script',
                    // '[private-web]:copy-shim',
                    '[private-web]:build-app-scripts',
                    // '[private-web]:vendor-css',
                    // '[private-web]:copy-fonts',
                    '[private-web]:copy-app-html',
                    // '[private-web]:copy-app-styles',
                    // '[private-web]:copy-component-styles',
                    // '[private-web]:copy-app-assets'
                ],
                '[private-web]:copy-template',
                done
            );
        });

        gulp.task('[private-web]:copy-angular1-scripts', function () {
            return gulp.src(config.source.files.angular1)
                .pipe(concat(config.targets.angular1MinJs))
                //.pipe(uglify())
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'scripts/')));
        });
        gulp.task('[private-web]:build-app-scripts', function () {
            return gulp.src(config.source.files.app.js)

                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.appFolder)));
        });

        gulp.task('[private-web]:start-live-server', ['build-web'], function () {
            return gulp.src(config.targets.buildFolder)
                .pipe(server({
                    livereload: true,
                    //directoryListing: true,
                    open: true,
                    defaultFile: 'index.html',
                    log: "debug"
                }));
        });

        gulp.task('watch-web', ['[private-web]:start-live-server'], function () {
            deltaWatch();
        });

        function deltaWatch() {
            return watch(config.source.files.app.everything, batch(function (events, done) {
                console.log(arguments);

                runSequence(
                    //'[private-web]:copy-system-setup-script',
                    '[private-web]:copy-app-html',
                    '[private-web]:build-app-scripts',
                    '[private-web]:copy-template',
                    done);
            }));
        }

        gulp.task('[private-web]:copy-app-html', function () {
            return gulp.src(config.source.files.app.html)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.appFolder)));
        });


        gulp.task('[private-web]:copy-template', function () {
            var sources = gulp.src(config.source.files.injectables);

            return gulp.src(config.source.files.main)
                .pipe(inject(sources, { addRootSlash: false, ignorePath: 'dist/www' }))
                .pipe(gulp.dest(path.join(config.targets.buildFolder)));
        });

    }
    module.exports = {
        init: RegisterTasks
    };
})();