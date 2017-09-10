var gulp=require("gulp"),
    less=require("gulp-less");
gulp.task("translate",function () {
    gulp.src("src/css/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
})
