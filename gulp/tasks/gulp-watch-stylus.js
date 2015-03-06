(function() {
  'use strict';

  module.exports = function(gulp, config ) {
    console.log(config.stylus);
    gulp.task('watch-stylus', function () {
      gulp.watch(config.stylus, ['stylus'] );
    });
  };

}());
