const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const pug = require('gulp-pug');

const sassTask = function () {
    return src('EQ_Homes/src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('EQ_Homes/dist/css'))
};

const jsTask = function () {
    return src('EQ_Homes/src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('EQ_Homes/dist/js'))
};

const pugTask = function () {
    return src('EQ_Homes/src/view/**/*.pug')
    .pipe(pug())
    .pipe(dest('EQ_Homes/dist/html'))
};

function watchTask() {
    watch(['EQ_Homes/src/js/**/*.js', 'EQ_Homes/src/sass/**/*.scss', 'EQ_Homes/src/view/**/*.pug'],
        parallel(sassTask, jsTask, pugTask))
};

exports.sassTask = sassTask;
exports.jsTask = jsTask;
exports.pugTask = pugTask;
exports.watchTask = watchTask;
exports.default = series(parallel(jsTask, sassTask, pugTask),watchTask);