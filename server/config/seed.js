/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Therapist from '../api/Therapist/Therapist.model';
import Treatment from '../api/Treatment/Treatment.model';

var time = moment();

Treatment.find({}).removeAsync()
  .then(() => {
    Treatment.create({
      _id: '570219df5cca8f701a078f46',
      name: 'Fodbehandling',
      description: 'Fjernelse af hård hud og evt. ligtorne, klipning og slibning af neglene, ' +
        'indgnidning af blødgørende negle olie.',
      imageUrl: "../../assets/images/4.jpg",
      price: 300,
      duration: 30,
      type: 'Fodbehandling'
    }, {
      _id: '570219df5cca8f701a076f46',
      name: 'Fodbehandling3232',
      description: 'Fjernelse af hård hud og evt. ligtorne, klipning og slibning af neglene, ' +
        'indgnidning af blødgørende negle olie.',
      imageUrl: "../../assets/images/4.jpg",
      price: 300,
      duration: 30,
      type: 'Negle'
    }, {
      _id: '570219df5cca8f702a078f46',
      name: 'Fodbehandling3',
      description: 'Fjernelse af hård hud og evt. ligtorne, klipning og slibning af neglene, ' +
        'indgnidning af blødgørende negle olie.',
      imageUrl: "../../assets/images/4.jpg",
      price: 300,
      duration: 30,
      type: 'Fodbehandling'
    }, {
      _id: '570219df5cca8f701a078f47',
      name: 'Luksus Fodbehandling',
      description: 'En  luksusbehandling for dine fødder og læg, til dig som ønsker velvære.' +
        'Peeling af fødder, ankler og læg.Fjernelse af hård hud og evt. ligtorne.' +
        'Klipning og slibning af neglene, indgnidning af blødgørende negle olie. Fødderne får til ' +
        'sidst en lækker Paraffinbehandling ',
      imageUrl: "../../assets/images/4.jpg",
      price: 395,
      duration: 45,
      type: 'Arm'
    });
  });

Therapist.find({}).removeAsync()
  .then(() => {
    Therapist.createAsync({

      name: 'Andy',
      description: 'Nyuddanet behandler',
      imageUrl: "../../assets/images/glad.jpg",
      treatments: ['570219df5cca8f701a078f46', '570219df5cca8f701a078f47'],
      dayWorking: [{
        startTime: new Moment().format('MMMM Do YYYY, h:mm'),
        endTime: new Moment().add(3, 'days').calendar(),
        active: true
      }],
      breaks: [{
        startTime: new Moment(),
        endTime: new Moment()
      }]
    })
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        _id: '573af09e9a0ed72c1d6adb24',
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      }, {
        name: 'Andy',
        address: {
          street: 'sønderhedevej',
          streetNumber: 40,
          zipCode: 6710
        },
        email: 'google@.dk',
        phone: 231235345,

        password: 'andy1959',
        provider: 'local',
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
