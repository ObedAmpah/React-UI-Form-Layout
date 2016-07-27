'use strict'

// Gulpfile dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

// Sass Compiler
gulp.task('sass', function() {
	return gulp.src('./styles/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./styles'))
});


// Gulpfile defaults
gulp.task('default', ['sass']);