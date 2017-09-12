var gulp=require("gulp");
var less = require('gulp-less');
gulp.task("translate",function () {
    gulp.src("src/css/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
});

