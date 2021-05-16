const request = require('supertest')
const app = require('../app.js')
const crypto = require("crypto");

describe('Register Endpoints', () => {
  it('should create a new survey', async () => {
    const res = await request(app)
      .post('/api/create/create')
      .send({
        title: "test survey",
        pages: [],
    })
    expect(res.statusCode).toEqual(500)
  })
})