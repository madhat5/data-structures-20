// var randGen = require('rand-gen');
// const key = require('key-creator');

// let randKey = function () {
  // (Math.random() * 999) + 100)
// }
// console.log(randKey())

var blogEntries = [];

class BlogEntry {
  constructor(primaryKey, date, entry, schoolWork, work, exercise) {
    this.pk = {};
    this.pk.N = primaryKey.toString();
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.entry = {};
    this.entry.S = entry;
    this.schoolWork = {};
    this.schoolWork.BOOL = schoolWork; 
    this.work = {};
    this.work.BOOL = work;
    if (exercise != null) {
      this.exercise = {};
      this.exercise.SS = exercise; 
    }
    this.month = {};
    this.month.N = new Date(date).getMonth().toString();
  }
}

blogEntries.push(new BlogEntry(Math.floor((Math.random() * 999) + 100), 'August 28 2020', "First week of class and work", true, false, ["core", "stretching"]));
blogEntries.push(new BlogEntry(Math.floor((Math.random() * 999) + 100), 'September 1, 2020', "No more (f)unemployement", false, true, ["core"]));
blogEntries.push(new BlogEntry(Math.floor((Math.random() * 999) + 100), 'September 15, 2020', "Rest and homework today", false, false));
blogEntries.push(new BlogEntry(Math.floor((Math.random() * 999) + 100), 'September 25, 2020', "Full day today", true, true, ["stretching", "climbing"]));


// console.log(blogEntries);


// ================================================================

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {};
// params.Item = blogEntries[0]; 
for (let index in blogEntries) {
  // console.log(blogEntries[index])
  params.Item = blogEntries[index]; 
  // console.log(params)
  
  params.TableName = "processblog-20";

dynamodb.putItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
}

// params.TableName = "processblog-20";

// dynamodb.putItem(params, function (err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });