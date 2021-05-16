const expect = require('chai').expect;
const request = require('supertest');

const conn = require('../app.js');
const app = require("../routes/auth.routes.js")


describe('POST /register', () => {
  before((done) => {
    conn.connect()
      .then(() => done())
      .catch((err) => done(err));
  })

  it('OK, creating a new user works', (done) => {
    request(app).post('/register')
      .send({email: "gorik333@gmail.com", password: "3333333333"})
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('_id');
        expect(body).to.contain.property('email');
        expect(body).to.contain.property('password');
        done();
      })
      .catch((err) => done(err));
  });

  it('Fail, note requires text', (done) => {
    request(app).post('/register')
      .send({ name: 'NOTE' })
      .then((res) => {
        const body = res.body;
        expect(body.errors.text.name)
          .to.equal('ValidatorError')
        done();
      })
      .catch((err) => done(err));
  });
})
