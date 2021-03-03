  
// import { getJSON, getLocation } from './utils.js';

// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
// const promise = getLocation();
// promise.then(function(location) {
//     let latitude = location.coords.latitude;
//     let longitude = location.coords.longitude;
//     let url = baseUrl + "&latitude=" + latitude + "&longitude=" + longitude + "&maxradiuskm=100";
//     console.log(url);
//     const quakes = getJSON(url);
//     console.log(quakes);
// }).catch(err => {
//     console.log(err);
// })

import QuakesController from './quakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();