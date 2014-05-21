var sapper = require('../sapper');
var expect = require('chai').expect;

describe("span", function () {
  it('is exported as sapper.span', function () {
    expect(sapper).to.have.property('span');
  });

  it('is a factory method', function () {
    expect(sapper.span()).to.be.an('object');
  });

  describe('instance', function (){
    var span;
    beforeEach(function () {
      span = sapper.span();
    });

    it('has an annotate method', function () {
      expect(span).to.have.property('annotate').that.is.a('function');
    });

    it('can be created with traceId', function () {
      span = sapper.span({traceId: 11000});
      expect(span).to.have.property('traceId', 11000);
    });

    it('can be created with spanId', function () {
      span = sapper.span({spanId: 12000});
      expect(span).to.have.property('spanId', 12000);
    });

    it('can be created with parentId', function () {
      span = sapper.span({parentId: 1234});
      expect(span).to.have.property('parentId', 1234);
    });

    it('can be created with start annotation', function () {
      span = sapper.span({start: 1234});
      expect(span).to.have.property('start', 1234);
    });

    it('can be created with a name', function () {
      span = sapper.span({name: 'spanName'});
      expect(span).to.have.property('name', 'spanName');
    });

    it('can be created with serverReceive', function () {
      span = sapper.span({serverReceive: 1234});
      expect(span).to.have.property('serverReceive', 1234);
    });
  });
});