(function(root) {
    'use strict';

    describe('Primary access', function() {
        it('resizeend available in global scope', function() {
            expect(typeof root.resizeend).toBe('object');
        });
        it('delay method available in global scope', function() {
            expect(typeof root.resizeend.delay).toBe('function');
        });
    });
})(this);
