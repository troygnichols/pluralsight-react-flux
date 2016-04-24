"use strict";

var gulp       = require('gulp');
var connect    = require('gulp-connect');
var open       = require('gulp-open');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var concat     = require('gulp-concat');
var eslint     = require('gulp-eslint');

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js:   [
      './src/**/*.js',
      'node_modules/bootstrap/js/**/*.js'
    ],
    mainJs: './src/main.js',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    images: './src/images/**/*',
    dist: './dist'
  }
};

gulp.task('connect', function() {
  connect.server({
    root:       ['dist'],
    port:       config.port,
    base:       config.devBaseUrl,
    livereload: {
      port: 35352
    }
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
    .pipe(open({
      uri: config.devBaseUrl + ':' + config.port + '/'
    }));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform('babelify', {
      presets: ['es2015', 'react']
    })
    .bundle() // put it all into one file
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
    .pipe(connect.reload())
});

gulp.task('eslint', function() {
  return gulp.src(config.paths.js)
    .pipe(eslint())
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('images', function() {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());

  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'eslint']);
  gulp.watch(config.paths.images, ['images']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'eslint', 'watch']);
