var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var watchify   = require('watchify');
var gutil      = require('gulp-util');
var assign     = require('lodash.assign');
var babelify   = require('babelify');

// Add custom browerify options here!
var customOpts = {
  entries:   ['./app.js'],
  extesions: ['.js', ''],
  debug:     true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
b.transform(babelify);

var bundle = function() {
  b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build'));
};

gulp.task('build', bundle);
b.on('update', bundle);
b.on('log',    gutil.log);

gulp.task('default', ['build']);
