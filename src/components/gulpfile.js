/*

var gulp = require('gulp'); //add package gulp to gulp variable
var cssClean = require('gulp-clean-css');
var sass = require('gulp-sass');

var srcFiles = ['src/index.html', 'src/style.css', 'src/main.js']

gulp.task('default', function(){		//can use gulp.start
	//html
	gulp.watch(['src/index.html', 'src/main.js', 'src/style.css'], ['copy']);

	//css
	gulp.watch('src/style.scss', ['styles']);	//first compile and then minify
});

//copy html js
gulp.task('copy', function(){	
	gulp.src(['src/index.html', 'src/main.js'])
		.pipe(gulp.dest('dist/'));
	console.log('copied HTML and JS');
});

//compile scss
gulp.task('styles', function(){
	gulp.src('src/style.scss')
		.pipe(sass())
		.pipe(cssClean())
		.pipe(gulp.dest('dist/'));
	console.log("compiled and cleaned scss")
});

*/




