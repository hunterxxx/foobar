var gulp = require('gulp'); //add package gulp to gulp variable
var cssClean = require('gulp-clean-css');
var sass = require('gulp-sass');

var srcFiles = ['event_index.html', 'scss/events.scss', 'js/script.js']

gulp.task('default', function () {		//can use gulp.start

	//css
	gulp.watch('scss/*.scss', ['styles']);	//first compile and then minify

	//html
	gulp.watch(['event_index.html', 'js/events.js', 'images/*', 'css/events.css'], ['copy']);
});

//copy html js
gulp.task('copy', function () {
	gulp.src(['event_index.html', 'js/events.js', 'images/*', 'css/events.css'])
		.pipe(gulp.dest('dist/'));
	console.log('copied HTML and JS');
});

//compile scss
gulp.task('styles', function () {
	gulp.src('scss/events.scss')
		.pipe(sass())
		.pipe(cssClean())
		.pipe(gulp.dest('css/'))
		.pipe(gulp.dest('dist/'));
	console.log("compiled and cleaned scss")
});





