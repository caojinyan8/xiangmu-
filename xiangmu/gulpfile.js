const gulp = require("gulp");
const babel = require("gulp-babel"); //编译JS
const uglify = require("gulp-uglify"); //压缩JS
const webserver =  require('gulp-webserver'); //服务器
const miniCSS = require("gulp-clean-css"); //压缩CSS
const sass = require("gulp-sass"); //编译sass
gulp.task("buildJS", function(){
	//业务文件压缩
	gulp.src("./src/pages/**/*.js")
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe( uglify() ) 
		.pipe( gulp.dest("./dist/pages") );

		gulp.src("./src/js/model/*.js")
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe( uglify() ) 
		.pipe( gulp.dest("./dist/js/model") );
	//第三方库不压缩
	gulp.src("./src/js/libs/*.js")
		.pipe(gulp.dest("./dist/js/libs"))

		gulp.src("./src/js/*.js")
		.pipe(gulp.dest("./dist/js"))
	
});
gulp.task("buildCSS", ()=>{
	gulp.src("./src/css/*.scss")
		.pipe( sass() )  //编译
		.pipe( miniCSS() )  //压缩
		.pipe( gulp.dest("./dist/css") );
})

gulp.task("buildHTML", function(){
	gulp.src("./src/pages/**/*.html").pipe( gulp.dest("./dist/pages") );
})
gulp.task("builStatic", function(){
	gulp.src("./src/static/**/*.*")
		.pipe( gulp.dest("./dist/static") )
})
gulp.task("builCSS",()=>{
    gulp.src("./src/css/*.css").pipe(miniCSS()).pipe(gulp.dest("./dist/css"))//压缩css
})
//构建项目

gulp.task("build", ["buildJS","buildHTML","builCSS","builCSS","builStatic"]);

gulp.task("watch", ()=>{
	gulp.watch("./src/**/*.html", ["buildHTML"]);
	gulp.watch("./src/**/*.js", ["buildJS"]);
	gulp.watch("./src/**/*.scss", ["buildCSS"]);
	gulp.watch("./src/**/*.scss", ["builCSS"]);
})
//本地服务器
gulp.task("webserver", ["watch", "build"] , ()=>{
	gulp.src('./dist')
	.pipe(webserver({
		livereload: true
	}));
})