var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

function javascript() {
    return gulp.src('scripts/!(main).js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./scripts/'))
}

function css() {
    return gulp
        .src('./styles/style.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./styles/'));
}

function images() {
    return gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images/comp/'))
}

function serve() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./images/*', images)
    gulp.watch('./styles/*.less', css).on('change', browserSync.reload);
    gulp.watch('./scripts/!(main).js', javascript).on('change', browserSync.reload);
}

exports.default = serve;