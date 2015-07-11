var gulp = require('gulp');
var crypto = require('crypto');
var reactify = require('reactify'); 
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var hash = crypto.randomBytes(10).toString('hex');

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./static/js/index.jsx'], 
        transform: [reactify], 
        debug: true, 
        cache: {}, 
        packageCache: {}, 
        fullPaths: true
    });
    
    return bundler.bundle() 
        .pipe(source("main-"+hash+".js"))
        .pipe(gulp.dest('./static/bundles/'));
});

gulp.task('jsx-watch', function() {
    // ...
});


gulp.task('default', ['browserify']);