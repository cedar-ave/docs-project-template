'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var childProcess = require('child_process');
let docfxProcess = null;

gulp.task('sass', function () {
    return gulp.src('./_site/Styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('site.css'))
        .pipe(gulp.dest('./_site/styles'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./_site/Styles/**/*.scss', ['sass']);
});

gulp.task('docfx:watch', function () {
    gulp.watch('./articles/**/*', ['docfx']);
});

gulp.task('docfx', function () {
    if (docfxProcess){
        docfxProcess.kill();
        docfxProcess = null;
    }
    docfxProcess = childProcess.spawn("c:/Source/docfx_source/docfx/docfx/docfx build --serve", {stdio: ['inherit', 'inherit', 'inherit']});
    docfxProcess.on('error', (err) => console.error(err));
    docfxProcess.on('exit', () => docfxProcess = null);
});

gulp.task('copy-assets', function () {
    gulp.src('./Assets/**/*')
        .pipe(gulp.dest('./_site/assets'));
});

gulp.task('copy-font-awesome-fonts', function () {
    gulp.src('./node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./_site/fonts'));
});

gulp.task('copy-open-sans-fonts', function () {
    gulp.src('./node_modules/npm-font-open-sans/fonts/**/*')
        .pipe(gulp.dest('./_site/fonts/'));
});

gulp.task('copy-open-sans-styles', function () {
    gulp.src('./node_modules/npm-font-open-sans/open-sans.css')
        .pipe(gulp.dest('./_site/'));
});

gulp.task('copy-font-awesome-styles', function () {
    gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('./_site/styles'));
});

gulp.task('copy-lightbox-css', function () {
    gulp.src('./node_modules/lightbox2/dist/css/**')
        .pipe(gulp.dest('./_site/styles'));
});

gulp.task('copy-lightbox-js', function () {
    gulp.src('./node_modules/lightbox2/dist/js/**')
        .pipe(gulp.dest('./_site/styles'));
});

gulp.task('copy-img', function () {
    gulp.src('./templates/site/images/**')
        .pipe(gulp.dest('./_site/images'));
});

gulp.task('copy-tipue', function () {
    gulp.src('./templates/tipuesearch/**')
        .pipe(gulp.dest('./_site/tipuesearch'));
});

gulp.task('default', ['sass', 'copy-assets', 'copy-open-sans-fonts', 'copy-open-sans-styles', 'copy-font-awesome-fonts', 'copy-font-awesome-styles', 'copy-lightbox-css', 'copy-lightbox-js', 'copy-img', 'copy-tipue']);
gulp.task('run', ['sass:watch','docfx:watch']);