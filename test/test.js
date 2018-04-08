const expect = require('chai').expect;
const kw = require('../index');

describe('keywords', () => {

  it('should return an object', () => {
    expect(kw).to.be.an('object');
    expect(kw).to.not.be.undefined;
  });

});
