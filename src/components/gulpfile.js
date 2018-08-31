var gulp = require('gulp'); //add package gulp to gulp variable
var cssClean = require('gulp-clean-css');
var sass = require('gulp-sass');

var srcFiles = ['event_index.html', 'css/style.css', 'js/script.js']

gulp.task('default', function(){		//can use gulp.start
	//html
	gulp.watch(['event_index.html', 'js/script.js', 'css/style.css'], ['copy']);

	//css
	gulp.watch('scss/*.scss', ['styles']);	//first compile and then minify
});

//copy html js
gulp.task('copy', function(){	
	gulp.src(['event_index.html', 'js/script.js'])
		.pipe(gulp.dest('dist/'));
	console.log('copied HTML and JS');
});

//compile scss
gulp.task('styles', function(){
	gulp.src('scss/style.scss')
		.pipe(sass())
		.pipe(cssClean())
		.pipe(gulp.dest('dist/'));
	console.log("compiled and cleaned scss")
});





