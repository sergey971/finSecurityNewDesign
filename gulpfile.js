const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Оптимизация изображений
gulp.task('optimize-images', () => {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Другие задачи оптимизации, если необходимо

// Запуск задачи оптимизации по умолчанию
gulp.task('default', gulp.series('optimize-images'));
