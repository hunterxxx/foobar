var gulp = require('gulp');

//var cleanCSS = require('gulp-clean-css');

var sass = require('gulp-sass');

gulp.task('default', function(){
//    gulp.watch('index.html', ['copy']);
//    console.log('Watching index.html now');
//    gulp.watch('css/style.css', ['cleanCSS']);
//    console.log('Minifying CSS styles');
   gulp.watch('css/styles.scss', ['sassToCss']);
   console.log('SASS file to CSS');
});
// ver o ficheiro "live"

// gulp.task('copy', function(){
//     gulp.src('index.html').pipe(gulp.dest('dist/'));
// });
// //copia o ficheiro html e coloca-o na pasta de destino

gulp.task('sassToCss', function(){
    gulp.src('css/*.scss')
    .pipe(sass())
    //.pipe(cleanCSS())
    .pipe(gulp.dest('dist/'));
});

// gulp.task('cleanCSS', function(){
//     gulp.src('css/style.css')
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('dist/'));
// });
// //minimiza os ficheiros css e coloca-os na pasta de destino

