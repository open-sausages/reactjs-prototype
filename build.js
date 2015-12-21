var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

// common.
browserify({ debug: true, entries: './common/javascript/src/main.js' })
    .transform(babelify)
    .require('./common/javascript/src/di.js', { expose: 'di' })
    .bundle()
    .on('error', function (err) { console.log('Error: ' + err.message); })
    .pipe(fs.createWriteStream('./common/javascript/dist/main.js'));

// cms
browserify({ debug: true, entries: './cms/javascript/src/main.js' })
    .transform(babelify)
    .external('di')
    .bundle()
    .on('error', function (err) { console.log('Error: ' + err.message); })
    .pipe(fs.createWriteStream('./cms/javascript/dist/main.js'));
