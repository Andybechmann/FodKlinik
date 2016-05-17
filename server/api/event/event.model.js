'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
Schema = mongoose.Schema;

var EventSchema = new mongoose.Schema({
  name:{
    type:String,
    unique: true
  },
  type: String,
  startTime: Date,
  endTime: Date,
  therapist: {
    type: Schema.ObjectId,
    ref: 'Therapist'
  },
  treatment: {
    type: Schema.ObjectId,
    ref: 'Treatment'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('Event', EventSchema);
