// karma.conf.js
module.exports = function(config) {
    config.set({
        files: [ '../src/resizeend.js', '../test/resizeend.spec.js' ],
        browsers: [ 'PhantomJS' ],
        frameworks: [ 'jasmine' ],
        reporters: [ 'spec' ]
    });
};