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

    function verifyProperty(name) {
      it('can be created with ' + name, function () {
        var params = {};
        params[name] = 1234;
        span = sapper.span(params);
        expect(span).to.have.property(name, 1234);
      });

      it('allows you to late set the ' + name, function () {
        span[name] = 1234;
        expect(span).to.have.property(name, 1234);
      });

      it('prevents changing the ' + name, function () {
        var params = {};
        params[name] = 1234;
        span = sapper.span(params);
        expect(function () {
          span[name] = 5678;
        }).to.throw(Error);
      });
    }

    ['traceId', 'spanId', 'parentId', 'name'].forEach(function (name) {
      verifyProperty(name);
    });

    it('can be created with start annotation', function () {
      span = sapper.span({start: 1234});
      expect(span).to.have.property('start', 1234);
    });

    it('can be created with serverReceive', function () {
      span = sapper.span({serverReceive: 1234});
      expect(span).to.have.property('serverReceive', 1234);
    });
  });
});