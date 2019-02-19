const assert = require('assert');
const PaintCan = require('../paintcan.js');

describe('PaintCan', function () {

  let paintcan1;
  let paintcan2;

  beforeEach(function () {
    paintcan1 = new PaintCan(25);
    paintcan2 = new PaintCan(0);

  });

  it('should have number of litres', function() {
    const actual = paintcan1.litres;
    const expected = 25;
    assert.strictEqual(actual, expected);
  });

  it('should be able to check if it is empty', function() {

    const actual = paintcan2.isEmpty();
    const expected = 'Can is empty';
    assert.strictEqual(actual, expected);
  });

  it('should be able to empty itself', function() {
    const actual = paintcan1.makeItEmpty();
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

});
