var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify'); 



/*************   LTR     ***************/


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('xino/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('xino/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})

//_______task for style-dark
gulp.task('dark', function(){
   return gulp.src('xino/assets/css/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});

//_______task for sidemenu
gulp.task('sidemenu', function(){
   return gulp.src('xino/assets/css/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});

//_______task for skin-modes
gulp.task('skins', function(){
   return gulp.src('xino/assets/css/skin-modes.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});


//_______task for skin-modes
gulp.task('boxed', function(){
   return gulp.src('xino/assets/css/boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});


//_______task for skin-modes
gulp.task('dark-boxed', function(){
   return gulp.src('xino/assets/css/dark-boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});


//_______task for skin-modes
gulp.task('closed-menu', function(){
   return gulp.src('xino/assets/css/sidemenu-closed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});


//_______task for skin-modes
gulp.task('menu2', function(){
   return gulp.src('xino/assets/css/sidemenu2.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});


//_______task for skin-modes
gulp.task('menu3', function(){
   return gulp.src('xino/assets/css/sidemenu3.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});

//_______task for skin-modes
gulp.task('menu4', function(){
   return gulp.src('xino/assets/css/sidemenu4.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});

//_______task for skin-modes
gulp.task('responsive', function(){
   return gulp.src('xino/assets/css/sidemenu-responsive.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});
//_______task for skin-modes
gulp.task('tabs', function(){
   return gulp.src('xino/assets/css/sidemenu-responsive-tabs.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/css'));
		
});


//_______task for beautify
gulp.task('beautify', function() {
	return gulp.src('xino/assets/css/**/*.css')
		.pipe(beautify.css({ indent_size: 4 }))
		.pipe(gulp.dest('xino/assets/css'));
});
/*************         RTL     ***************/



//_______ task for scss folder to css main style 
gulp.task('rtlwatch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('xino/assets/scss-rtl/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('xino/assets/rtl-css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})




//_______task for style-dark
gulp.task('rtldark', function(){
   return gulp.src('xino/assets/rtl-css/style-dark.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});

//_______task for sidemenu
gulp.task('rtlsidemenu', function(){
   return gulp.src('xino/assets/rtl-css/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});

//_______task for skin-modes
gulp.task('rtlskins', function(){
   return gulp.src('xino/assets/rtl-css/skin-modes.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});


//_______task for skin-modes
gulp.task('rtlboxed', function(){
   return gulp.src('xino/assets/rtl-css/boxed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});


//_______task for skin-modes
gulp.task('rtlmenu2', function(){
   return gulp.src('xino/assets/rtl-css/sidemenu2.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});

//_______task for skin-modes
gulp.task('rtlmenu3', function(){
   return gulp.src('xino/assets/rtl-css/sidemenu3.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});

//_______task for skin-modes
gulp.task('rtlmenu4', function(){
   return gulp.src('xino/assets/rtl-css/sidemenu4.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});

//_______task for skin-modes
gulp.task('rtlclosed-menu', function(){
   return gulp.src('xino/assets/rtl-css/sidemenu-closed.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});

//_______task for skin-modes
gulp.task('rtlresponsive', function(){
   return gulp.src('xino/assets/rtl-css/sidemenu-responsive.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});

//_______task for skin-modes
gulp.task('rtltabs', function(){
   return gulp.src('xino/assets/rtl-css/sidemenu-responsive-tabs.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('xino/assets/rtl-css'));
		
});



//_______task for beautify
gulp.task('rtlbeautify', function() {
	return gulp.src('xino/assets/rtl-css/**/*.css')
		.pipe(beautify.css({ indent_size: 4 }))
		.pipe(gulp.dest('xino/assets/rtl-css'));
});




