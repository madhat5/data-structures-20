// console.log('sim sim salabim');
// npm install aws-sdk
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";
const dotenv = require('dotenv');
dotenv.config();  

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "processblog-20",
    KeyConditionExpression: "#sw :schoolWork", // the query expression
    // ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
    //      "#sw" : "schoolWork"
    // },
    ExpressionAttributeValues: { // the query values
        ":schoolWork": {B: "false"},
        // ":minDate": {N: new Date("August 28, 2020").valueOf().toString()},
        // ":maxDate": {N: new Date("December 11, 2020").valueOf().toString()}
    }
};

dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log("***** ***** ***** ***** ***** \n", item);
        });
    }
});