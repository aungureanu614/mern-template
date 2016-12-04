global.DATABASE_URL = 'mongodb://localhost/blog-tool-test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../../server/index');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('App name', function() {
  before(function(done) {
    server.runServer(function() {
      console.log("Init db here");
      done();
    });
  });

  it("should send 200 and 'Hello world' on simple GET to root route", function(done) {
    chai.request(app)
    .get("/")
    .end(function(err, res) {
      res.status.should.equal(200);
      res.body.message.should.equal("Hello world");
      done();
    });
  });

  after(function(done) {
    console.log("Clean up db here");
    done();
  });

});


