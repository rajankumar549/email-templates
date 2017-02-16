var gulp = require('gulp');
var rename = require('gulp-rename');
var juice = require('gulp-juice');

gulp.task('compile-html', function () {
    return gulp.src('./**/*-template.html')
    .pipe(juice({
        webResources: {
            images: false
        }
    }))
    .pipe(rename({suffix: "-inline"}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./**/*-template.html', ['compile-html']);
});

gulp.task('default', ['compile-html']);
