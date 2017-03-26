var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	concat = require('gulp-concat'),
	mincss = require('gulp-minify-css'),
	minjs = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	rigger = require('gulp-rigger'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch');

var paths = {
	stylus: {
		modules: 'src/stylus/modules/**.styl',
		src: 'src/stylus/**.styl',
		all: 'src/stylus/**',
		dest: 'build/css'
	},
	js: {
		libs: 'src/js/libs/**.js',
		src: 'src/js/',
		all: 'src/js/**',
		dest: 'build/js'
	},
	html: {
		all: 'src/**.html',
		dest: 'build/'
	},
	img: {
		all: 'src/img/**',
		dest: 'build/img'
	},
	fonts: {
		all: 'src/fonts/**',
		dest: 'build/fonts'
	}
}

gulp.task('html', function () {
	gulp.src(paths.html.all)
		.pipe(rigger())
		.pipe(gulp.dest(paths.html.dest));
})

gulp.task('images', function () {
	gulp.src(paths.img.all)
		.pipe(gulp.dest(paths.img.dest));
})

gulp.task('js', function () {
	gulp.src(paths.js.all)
		.pipe(gulp.dest(paths.js.dest));
})

gulp.task('fonts', function () {
	gulp.src(paths.fonts.all)
		.pipe(gulp.dest(paths.fonts.dest));
})

gulp.task('styles', function () {
	var processors = [
		autoprefixer({
            browsers: ['last 4 versions', '> 2%', 'ie 8-11'],
            cascade: false
        })
	]

	gulp.src(paths.stylus.src)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(postcss(processors))
		.pipe(mincss())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.stylus.dest));
})

gulp.task('watch', function () {
	gulp.watch(paths.html.all, ['html']);
	gulp.watch(paths.stylus.all, ['styles']);
	gulp.watch(paths.img.all, ['images']);
	gulp.watch(paths.fonts.all, ['fonts']);
	gulp.watch(paths.js.all, ['js']);
})

gulp.task('default', ['html', 'styles', 'images', 'fonts', 'js', 'watch']);