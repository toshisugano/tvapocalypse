var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat'); 
var rename = require('gulp-rename');
var connect = require('gulp-connect');  
var sass = require('gulp-sass');

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function() {
	connect.server({
		root: './dist',
		livereload : true,
		port : 3000
	});
}); 

gulp.task('html', function() { 
    return gulp.src('src/*.html') 
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    return gulp.src('src/images/*.{jpg,gif.png}')
        .pipe(gulp.dest('./dist/images'))
        .pipe(connect.reload());
});  

gulp.task('css', function() { 
    return gulp.src('src/*.scss')
        .pipe(sass()) 
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
}); 

gulp.task('watch', function() { 
    gulp.watch(['./src/*.scss'], ['css']);
    gulp.watch(['./src/*.html'], ['html']);
    gulp.watch(['./src/images/*.{jpg,gif,png}'], ['images']);  
});

 

