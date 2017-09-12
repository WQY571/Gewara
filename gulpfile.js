var gulp=require("gulp");
var less = require('gulp-less');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
gulp.task("translate",function () {
    gulp.src("src/css/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
        .pipe(reload({stream:true}))
});
gulp.task('serve',['translate'], function() {
    browserSync.init({
        server: "./src/html"
    });

    gulp.watch("src/css/*.less", ['translate']);
    gulp.watch("src/css/*.css");
    gulp.watch("src/html/*.html").on('change', reload);
});


