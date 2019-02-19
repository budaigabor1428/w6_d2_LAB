const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {

  let room;

  beforeEach(function () {
    room = new Room(100);

  });

  it('should have an area in square meters', function() {
    const actual = room.area;
    const expected = 100;
    assert.strictEqual(actual, expected);
  });

});
