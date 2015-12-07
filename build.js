var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

browserify({ debug: true })
    .transform(babelify)
    .require('./javascript/src/main.js', { entry: true })
    .bundle()
    .on('error', function (err) { console.log('Error: ' + err.message); })
    .pipe(fs.createWriteStream('./javascript/dist/main.js'));
