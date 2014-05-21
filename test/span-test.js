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

    it('allows you to late set the traceId', function () {
      span.traceId = 1234;
      expect(span).to.have.property('traceId', 1234);
    });

    it('prevents changing the traceId', function () {
      span = sapper.span({traceId: 1234});
      expect(function () {
        span.traceId = 5678;
      }).to.throw(Error);
    });

    it('can be created with spanId', function () {
      span = sapper.span({spanId: 12000});
      expect(span).to.have.property('spanId', 12000);
    });

    it('allows you to late set the spanId', function () {
      span.spanId = 1234;
      expect(span).to.have.property('spanId', 1234);
    });

    it('prevents changing the spanId', function () {
      span = sapper.span({spanId: 1234});
      expect(function () {
        span.spanId = 5678;
      }).to.throw(Error);
    });

    it('can be created with parentId', function () {
      span = sapper.span({parentId: 1234});
      expect(span).to.have.property('parentId', 1234);
    });

    it('allows you to late set the parentId', function () {
      span.parentId = 1234;
      expect(span).to.have.property('parentId', 1234);
    });

    it('prevents changing the parentId', function () {
      span = sapper.span({parentId: 1234});
      expect(function () {
        span.parentId = 5678;
      }).to.throw(Error);
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