var hool = require('../bin/hooligan');

describe('### Testing Hooligan', function() {
  it("should respond with false when applied to null.", function(done) {
    expect(hool.existy(null)).toEqual(false);
    done();
  });

  it("should respond with false when applied to undefined as a keyword.", function(done) {
    expect(hool.existy(undefined)).toEqual(false);
    done();
  });

  it("should respond with true when applied to undefined as a string.", function(done) {
    expect(hool.existy('undefined')).toEqual(true);
    done();
  });
});
