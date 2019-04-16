const gulp = require('gulp');
const sass = require('gulp-sass');
const mincss = require('gulp-clean-css');
const minjs = require('gulp-uglify')
gulp.task('bsass', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})
gulp.task('css', () => {
    return gulp.src('./src/css/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('dist/css'))
})
gulp.task('js', () => {
    return gulp.src('./src/js/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('dist/js'))
})
gulp.task('watch', () => {
    return gulp.watch('./src/scss/*.scss', gulp.series('bsass'))
})
gulp.task('build', gulp.parallel('css', 'js'))