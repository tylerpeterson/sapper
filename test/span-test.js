var sapper = require('../sapper');
var expect = require('chai').expect;

describe("span", function () {
  it('is exported as sapper.span', function () {
    expect(sapper).to.have.property('span');
  });

  it('is a factory method', function () {
    expect(sapper.span()).to.be.an('object');
  });
});