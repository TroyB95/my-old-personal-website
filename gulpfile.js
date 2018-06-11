/*eslint-env node */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
let babel = require('gulp-babel');
var uglify = require('gulp-uglify');


gulp.task('default', function() {
	gulp.watch('scss/**/*.scss', ['styles']);
});

// gulp.task('lint', () => {
// 	// ESLint ignores files with "node_modules" paths.
//     // So, it's best to have gulp ignore the directory as well.
//     // Also, Be sure to return the stream from the task;
//     // Otherwise, the task may end before the stream has finished.
//     return gulp.src(['/js/**/*.js','!node_modules/**'])
//         // eslint() attaches the lint output to the "eslint" property
//         // of the file object so it can be used by other modules.
//         .pipe(eslint())
//         // eslint.format() outputs the lint results to the console.
//         // Alternatively use eslint.formatEach() (see Docs).
//         .pipe(eslint.format())
//         // To have the process exit with an error code (1) on
//         // lint error, return the stream and pipe to failAfterError last.
//         .pipe(eslint.failAfterError());
// });

gulp.task('styles', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('copy-html', function() {
	gulp.src('./index.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('copy-images', function() {
	gulp.src('imgs/*')
		.pipe(gulp.dest('./dist/imgs'));
});

gulp.task('scripts', function(){
	gulp.src('js/**/*.js')
		.pipe(babel({
      		presets: ['env']
    	}))
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-dist', function(){
	gulp.src('js/**/*.js')
		.pipe(babel({
      		presets: ['env']
    	}))
		.pipe(concat('all.js'))
		.pipe(uglify().on('error', function(e){
            console.log(e);
         }))
		.pipe(gulp.dest('dist/js'));
});


gulp.task('browserSync', function() {
	browserSync.init({
		server: "./dist"
	});
});

gulp.task('watch', ['copy-html', 'copy-images', 'browserSync', 'styles', 'scripts'], function(){
	gulp.watch('scss/**/*.scss', ['styles']);
	// Reload browser on html or js file change
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('*.html', ['copy-html']);
})