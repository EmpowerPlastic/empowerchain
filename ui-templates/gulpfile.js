var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//var rename = require('gulp-rename');
//let cleanCSS = require('gulp-clean-css');
//const uglifycss = require('gulp-uglifycss');
//declare *  from   'gulp-uglifycss';

gulp.task('scss', function () {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});


gulp.task('watch', function () {
    // We use `gulp.watch` for Gulp to expect changes in the files to run again
    gulp.watch('assets/scss/*.scss', gulp.series('scss'));
    //gulp.watch('app/css/*.css', gulp.series('minify-css'));
});

