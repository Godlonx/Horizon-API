const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const app = require('../app');

chai.use(chaiHttp);

describe('Express Application Tests', () => {
  const baseUrl = `http://localhost:3000`;

  // Test /greet endpoint
  describe('GET /greet', () => {
    it('should return a greeting message', (done) => {
      chai.request(baseUrl)
        .get('/greet')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message').that.equals('Hello, world!');
          done();
        });
    });
  });

  // Test Swagger UI setup
  describe('GET /api-docs', () => {
    it('should return the Swagger UI page', (done) => {
      chai.request(baseUrl)
        .get('/api-docs')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include('<html'); // Check for HTML content
          expect(res.text).to.include('Swagger UI'); // Verify Swagger UI title
          done();
        });
    });
  });
});
