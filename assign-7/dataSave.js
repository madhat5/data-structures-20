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

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

function createTable() {
    
    // SQL statement to create a table: 
    // var thisQuery = "CREATE TABLE aalocations (address varchar(100), lat double precision, long double precision);";
    // SQL statement to delete a table: 
    var thisQuery = "DROP TABLE aalocations;"; 
    
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    console.log('*** *** *** *** ***');
    console.log('table created')
}

function fillTable() {
    async.eachSeries(json, function (value, callback) {
        // const client = new Client(db_credentials);
        
        var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.InputAddress.StreetAddress + "', " + value.OutputGeocodes[0].OutputGeocode.Latitude + ", " + value.OutputGeocodes[0].OutputGeocode.Longitude + ");";
        client.query(thisQuery, (err, res) => {
            console.log(err, res);
            client.end();
        });
        setTimeout(callback, 1000);
    });
    console.log('*** *** *** *** ***');
    console.log('table populated')
}

function dataCheck() {
    // client.connect();

    // Sample SQL statement to query the entire contents of a table: 
    var thisQuery = "SELECT * FROM aalocations;";
    
    client.query(thisQuery, (err, res) => {
        console.log(err, res.rows);
        client.end();
    });
    
}

function runApp() {
    createTable();
    // fillTable();
    // dataCheck();
}
runApp();