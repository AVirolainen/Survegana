const request = require('supertest')
const app = require('../app.js')

describe('Survey Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/survey/a')
      .send({
        surveyId: "1",
        answers: {}
    })
    expect(res.statusCode).toEqual(500)
  })
})