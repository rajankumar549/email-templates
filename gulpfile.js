var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var svgmin = require('gulp-svgmin');

gulp.task('minify-css', function() {
    return gulp.src(['./common/*.css', '!common/*-min.css'])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: "-min"}))
        .pipe(gulp.dest('./common'));
});

gulp.task('minify-svg', function () {
    return gulp.src(['./common/*.svg', '!common/*-min.svg'])
        .pipe(svgmin())
        .pipe(rename({suffix: "-min"}))
        .pipe(gulp.dest('./common'));
});

gulp.task('watch', function () {
    gulp.watch('./common/*.css', ['minify-css']);
    gulp.watch('./common/*.svg', ['minify-svg']);
});

gulp.task('default', ['minify-css', 'minify-svg']);
