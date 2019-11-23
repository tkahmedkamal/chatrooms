const gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  htmlmin = require("gulp-htmlmin"),
  sourcemaps = require("gulp-sourcemaps"),
  rename = require("gulp-rename"),
  imagemin = require("gulp-imagemin"),
  babel = require("gulp-babel"),
  browserSync = require("browser-sync").create(),
  minify = require("gulp-minify");

/* ==== Html Task ==== */
gulp.task("html", function() {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("./build/"))
    .pipe(browserSync.stream());
});

/* ==== Css Task ==== */
gulp.task("css", function() {
  return gulp
    .src("./src/sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream());
});

/* ==== Javacript Task ==== */
gulp.task("js", function() {
  return gulp
    .src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(minify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
});

/* ==== Images Task ==== */
gulp.task("images", function() {
  return gulp
    .src("src/images/*.jpg")
    .pipe(
      imagemin({
        progressive: true,
        optimizationLevel: 5
      })
    )
    .pipe(gulp.dest("./build/images"))
    .pipe(browserSync.stream());
});

/* ==== Watch Task ==== */
gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./build/"
    }
  });
  gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload);
  gulp.watch("src/**/*.scss", ["css"]).on("change", browserSync.reload);
  gulp.watch("src/js/*.js", ["js"]).on("change", browserSync.reload);
  gulp.watch("src/images/*", ["images"]).on("change", browserSync.reload);
});
