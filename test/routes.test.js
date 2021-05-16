const request = require('supertest')
const app = require('../app.js')
const crypto = require("crypto");

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })

describe('Register Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: Math.random().toString(36).substr(2, 5)+"@gmail.com",
        password: '1234567',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('message')
  })
})

describe('Login Endpoints', () => {
    it('should find a user', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: "gorik3@gmail.com",
          password: 'gorik3',
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('token')
    })
  })

  describe('Survey Endpoints', () => {
    it('should create a new answer', async () => {
      const res = await request(app)
        .post('/api/survey/a')
        .send({
          surveyId: "1",
          answers: {}
      })
      expect(res.statusCode).toEqual(500)
    })
  })

  describe('Survey Endpoints', () => {
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
  