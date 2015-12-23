var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

// common
browserify({ debug: true, entries: './common/javascript/src/main.js' })
    .transform(babelify)
    .require('./common/javascript/src/di.js', { expose: 'di' })
    .require('./common/javascript/src/components/dataList/dataListComponent.js', { expose: 'DataListComponent' })
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

// better-list
browserify({ debug: true, entries: './better-list/javascript/src/main.js' })
    .transform(babelify)
    .external('di')
    .external('DataListComponent')
    .bundle()
    .on('error', function (err) { console.log('Error: ' + err.message); })
    .pipe(fs.createWriteStream('./better-list/javascript/dist/main.js'));
