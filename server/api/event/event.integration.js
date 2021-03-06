'use strict';

var app = require('../..');
import request from 'supertest';

var newEvent;

describe('Event API:', function() {

  describe('GET /event', function() {
    var events;

    beforeEach(function(done) {
      request(app)
        .get('/event')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          events = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      events.should.be.instanceOf(Array);
    });

  });

  describe('POST /event', function() {
    beforeEach(function(done) {
      request(app)
        .post('/event')
        .send({
          name: 'New Event',
          info: 'This is the brand new event!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEvent = res.body;
          done();
        });
    });

    it('should respond with the newly created event', function() {
      newEvent.name.should.equal('New Event');
      newEvent.info.should.equal('This is the brand new event!!!');
    });

  });

  describe('GET /event/:id', function() {
    var event;

    beforeEach(function(done) {
      request(app)
        .get('/event/' + newEvent._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          event = res.body;
          done();
        });
    });

    afterEach(function() {
      event = {};
    });

    it('should respond with the requested event', function() {
      event.name.should.equal('New Event');
      event.info.should.equal('This is the brand new event!!!');
    });

  });

  describe('PUT /event/:id', function() {
    var updatedEvent;

    beforeEach(function(done) {
      request(app)
        .put('/event/' + newEvent._id)
        .send({
          name: 'Updated Event',
          info: 'This is the updated event!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEvent = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEvent = {};
    });

    it('should respond with the updated event', function() {
      updatedEvent.name.should.equal('Updated Event');
      updatedEvent.info.should.equal('This is the updated event!!!');
    });

  });

  describe('DELETE /event/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/event/' + newEvent._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when event does not exist', function(done) {
      request(app)
        .delete('/event/' + newEvent._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
