/*
 * resizeend - v1.0.0
 * https://github.com/jeremenichelli/resizeend
 * 2015 (c) Jeremias Menichelli - MIT License
*/

(function(_win) {
    'use strict';

    // global variables
    var ev = document.createEvent('Event'), frame, time, delay;
    // Define that the event name is 'build'
    ev.initEvent('resizeend', true, true);

    // set delay
    var _setDelay = function(d) {
        delay = d;
    };

    // watch consecutive resize events
    var _watchResize = function() {
        if ((Date.now() - time) >= delay) {
            // cancel raf
            _win.cancelAnimationFrame(frame);

            // trigger event
            _win.dispatchEvent(ev);
            return;
        }

        frame = _win.requestAnimationFrame(_watchResize);
    };

    _setDelay(100);

    // listen to every resize and update metrics
    _win.addEventListener('resize', function() {
        // cancel previous watching event
        _win.cancelAnimationFrame(frame);

        // update time variable
        time = Date.now();

        // start watching event
        frame = _win.requestAnimationFrame(_watchResize);
    }, false);

    _win.resizeend = {
        delay: _setDelay
    };
})(window);
