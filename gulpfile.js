import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import csso from 'gulp-csso'
import include from 'gulp-file-include'
import htmlmin from 'gulp-htmlmin'
import { deleteAsync } from 'del'
import sync from 'browser-sync'
import concat from 'gulp-concat'
import autoPrefixer from 'gulp-autoprefixer'
import GulpImage from 'gulp-image'
import jsImport from 'gulp-js-import'

const { src, dest, watch, series } = gulp
const sass = gulpSass(dartSass)

gulp.task('html', function html() {
	return src('./src/index.html')
		.pipe(
			include({
				prefix: '@@',
			})
		)
		.pipe(dest('dist/'))
})

gulp.task('sass', function () {
	return src('./src/styles/index.sass')
		.pipe(sass())
		.pipe(autoPrefixer())
		.pipe(csso())
		.pipe(concat('styles.css'))
		.pipe(dest('dist'))
})

gulp.task('image', function () {
	return src('./src/assets/**/*')
		.pipe(GulpImage())
		.pipe(gulp.dest('dist/assets'))
})

gulp.task('js', function () {
	return src('./src/scripts/**.js')
		.pipe(jsImport())
		.pipe(gulp.dest('dist/scripts'))
})

gulp.task('clear', function () {
	return deleteAsync('dist')
})

gulp.task('serve', function () {
	sync.init({
		server: './dist',
	})

	watch('src/**/**.html', series('html')).on('change', sync.reload)
	watch('src/**/**.sass', series('sass')).on('change', sync.reload)
	watch('src/scripts/**.js', series('js')).on('change', sync.reload)
	watch('src/assets/*', series('image')).on('change', sync.reload)
})

gulp.task('build', gulp.series('clear', 'html', 'sass', 'js', 'image'))
gulp.task('watch', gulp.series('clear', 'html', 'sass', 'image', 'js', 'serve'))
