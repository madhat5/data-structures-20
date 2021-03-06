const { Client } = require('pg');
var async = require('async');
const dotenv = require('dotenv');
dotenv.config();

let json = require('./data/geoData.json');
// console.table(json);
// console.log(json[0].InputAddress.StreetAddress);
// console.log(json[0].OutputGeocodes[0]);
// console.log(json[0].OutputGeocodes[0].OutputGeocode.Latitude);
// console.log(json[0].OutputGeocodes[0].OutputGeocode.Longitude);

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'dmds20';
db_credentials.host = 'db-aa-geodata.cydn6tjpop8s.us-east-1.rds.amazonaws.com';
db_credentials.database = 'aageo';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

async.eachSeries(json, function (value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aageolocations VALUES (E'" + value.InputAddress.StreetAddress + "', " + value.OutputGeocodes[0].OutputGeocode.Latitude + ", " + value.OutputGeocodes[0].OutputGeocode.Longitude + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000);
});