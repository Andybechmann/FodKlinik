'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
  Schema = mongoose.Schema;


var TherapistSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  description: String,
  imageUrl: String,
  treatments: [{
    type: Schema.ObjectId,
    ref: 'Treatment'
  }],
  defaultWorkingHours: [{
    startTime: Date,
    endTime: Date,
    active: Boolean
  }],
  breaks: [{
    startTime: Date,
    endTime: Date
  }]
});

export default mongoose.model('Therapist', TherapistSchema);
