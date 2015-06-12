var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
 
gulp.task('lint', function() {
	return gulp.src('lib/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('compress', function() {
  return gulp.src('lib/ein.js')
    .pipe(uglify())
    .pipe(rename({
    	extname: '.min.js'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['lint', 'compress'], function() {});

