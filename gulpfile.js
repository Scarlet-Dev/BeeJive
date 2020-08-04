'use strict'
const gulp = require('gulp');
const del = require('del');
const caceh = require('gulp-cache');
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sequence = require('run-sequence');
const gulpIf = require('gulp-if');

gulp.task("minifyCss", function () {
    return gulp.src("src/css/*.css")
    .pipe(cleanCss())
    .pipe(gulp.dest("dist/styles"))   
});

gulp.task("minifyJs", function () {
    return gulp.src("src/js.*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("minifyImages", function () {
    return gulp.src("src/assets/**/*.(png|jpg|jpeg|gif|svg)")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("dist/assets"));
});

gulp.task("changeUserefs", function() {
    return gulp.src("src/*.html")
    .pipe(useref())
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulpIf("*.css", cleanCss()))
    .pipe(gulp.dest("dist/"));
});

gulp.task('clean:dist', function() {
    return del.sync("dist/")
});

gulp.task("build:dist", function () {
    sequence.use("",["","",""]);
});