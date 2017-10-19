'use strict';
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('dev:js', () =>{
    return gulp.src('src/scripts/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/scripts'));
});

gulp.task('default', ['dev:js']);