var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('run', function() {
	gulp.src('./')
	 .pipe(server({
		livereload: true,
		directoryListing: true,
		open: true
	}));
});
