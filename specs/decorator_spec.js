const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paintcan.js');

describe('Decorator', function () {

  let decorator;

  beforeEach(function () {
    can1 = new PaintCan (25);
    decorator = new Decorator(can1);

  });

  it('should have a stock', function() {
    const actual = decorator.stock;
    const expected = can1;
    assert.strictEqual(actual, expected);
  });

});
