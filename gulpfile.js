var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
gulp.task('bundle', function () {
    return browserify({
            basedir: '.',
            debug: true,
            entries: ['src/ts/main.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
})
gulp.task('default', gulp.series('bundle',function(){
    
}))
gulp.task('watch', function () {
    gulp.watch('./src/**/*.ts', gulp.series('default'));
})