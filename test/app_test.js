const request = require('supertest')
const assert = require('assert')
const app = require('../index')


describe('GET /classroom/students', function(){
  
    it('Should Return Students', function(done){
        request(app)
        .get('/classroom/students')
        .expect(200)
        .expect('Content-Type','application/json; charset=utf-8')
        .end(done)
    })
})


describe('GET /classroom/rooms', function(){
  
    it('Should Return Rooms', function(done){
        request(app)
        .get('/classroom/rooms')
        .expect(200)
        .expect('Content-Type','application/json; charset=utf-8')
        .end(done)
    })
})
describe('GET /classroom/deskdata', function(){
  
    it('Should Return Desk Data', function(done){
        request(app)
        .get('/classroom/deskdata')
        .expect(200)
        .expect('Content-Type','application/json; charset=utf-8')
        .end(done)
    })
})
describe('GET /classroom/dailydata', function(){
  
    it('Should Return Daily Data', function(done){
        request(app)
        .get('/classroom/dailydata')
        .expect(200)
        .expect('Content-Type','application/json; charset=utf-8')
        .end(done)
    })
})