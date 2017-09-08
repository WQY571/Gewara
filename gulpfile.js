var gulp=require("gulp"),
    less=require("gulp-less");
gulp.task("translate",function () {
    gulp.src("src/*.less")
        .pipe(less())
        .pipe(gulp.dest("src"))
})
