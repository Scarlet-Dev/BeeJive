'use strict'
const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sequence = require('run-sequence');

gulp.task("minifyCss", function () {
    return gulp.src("")
    .pipe(cleanCss())
    .pipe(gulp.dest("dist/styles"))
    }
);

gulp.task("", function () {
    return gulp.src("")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
})