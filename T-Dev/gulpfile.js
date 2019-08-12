var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// Gulp Uglify
gulp.task('gulp-uglify', async function(){
  gulp.src('app/js/script.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'))
});
var htmlmin = require('gulp-htmlmin');

gulp.task('gulp-htmlmin', async function() {
  return gulp.src('app/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

var csso = require('gulp-csso');

gulp.task('default', async function () {
    return gulp.src('app/css/styles.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/css/styles.css'));
});

gulp.task('development', async function () {
    return gulp.src('app/css/styles.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('dist/css/styles.css'));
});