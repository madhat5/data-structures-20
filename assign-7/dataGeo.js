"use strict"

// dependencies
const fs = require('fs'),
      querystring = require('querystring'),
      request = require('request'),
      async = require('async'),
      dotenv = require('dotenv');

// load old data
// https://stackoverflow.com/questions/7346563/loading-local-json-file
let json = require('./data/allZones-location_data.json');
// console.log(json);

// clean data
// > remove everything after street or avenue
// > remove evertyhing before number

var dataModel = [{ 
    address: '63 Fifth Ave, New York, NY', 
    latLong: { 
        lat: 40.7353041, 
        lng: -73.99413539999999 
    } 
}];

// TAMU api key
dotenv.config();
const API_KEY = process.env.TAMU_KEY;
const API_URL = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx'

// geocode addresses
let meetingsData = [];

let addresses = [];

json.forEach((el, i) => {
    // console.log(el.address)
    addresses.push(el.address)
})
// console.log(addresses)

// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(json, function(value, callback) {
    let query = {
        streetAddress: value.address,
        city: "New York",
        state: "NY",
        apikey: API_KEY,
        format: "json",
        version: "4.01"
    };

    // construct a querystring from the `query` object's values and append it to the api URL
    let apiRequest = API_URL + '?' + querystring.stringify(query);

    request(apiRequest, function(err, resp, body) {
        if (err){ throw err; }

        let tamuGeo = JSON.parse(body);
        console.log(tamuGeo['FeatureMatchingResultType'], apiRequest);
        meetingsData.push(tamuGeo);
    });

    // sleep for a couple seconds before making the next request
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('data/geoData.json', JSON.stringify(meetingsData));
    console.log('*** *** *** *** ***');
    console.log(`Number of meetings: ${meetingsData.length}`);
});