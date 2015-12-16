var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

// common.
browserify({ debug: true, entries: './common/javascript/src/main.js' })
    .transform(babelify)
    .require('./common/javascript/src/di.js', { expose: 'di' })
    .require('./common/javascript/src/components/friendsList/friendsListActions.js', { expose: 'friendsListActions' })
    .require('./common/javascript/src/components/friendsList/friendsListComponent.js', { expose: 'friendsListComponent' })
    .require('./common/javascript/src/components/friendsList/friendsListReducer.js', { expose: 'friendsListReducer' })
    .bundle()
    .on('error', function (err) { console.log('Error: ' + err.message); })
    .pipe(fs.createWriteStream('./common/javascript/dist/main.js'));

// cms
browserify({ debug: true, entries: './cms/javascript/src/main.js' })
    .transform(babelify)
    .external('di')
    .external('friendsListActions')
    .external('friendsListComponent')
    .external('friendsListReducer')
    .bundle()
    .on('error', function (err) { console.log('Error: ' + err.message); })
    .pipe(fs.createWriteStream('./cms/javascript/dist/main.js'));

// better-component
browserify({ debug: true, entries: './better-component/javascript/src/main.js' })
    .transform(babelify)
    .external('di')
    .external('friendsListComponent')
    .bundle()
    .on('error', function (err) { console.log('Error: ' + err.message); })
    .pipe(fs.createWriteStream('./better-component/javascript/dist/main.js'));
