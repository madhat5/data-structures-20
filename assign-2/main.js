// console.log('sim sim salabim')
// Zone 8

var fs = require('fs');
var cheerio = require('cheerio');

var dataModel = [{
    locationName: '',
    address: ''
}];
var data =[];

// assign + read from var is to avoid browser request issues/blocked from making req's
var content = fs.readFileSync('data/aa_pg08.txt');

var $ = cheerio.load(content);

// element query selector for locations
var queryEl = $("body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody > tr > td:first-child");
// console.log(queryEl);

// print to console/terminal
queryEl.each((i, el) => {
    // console.log($(el).text())
    // console.log($(el).children('h4').text())
    // console.log($(el).children('h4').text() + ':' + $(el).text());
    // console.log(i);
    
    // data.locationName += $(el).children('h4').text();
    // data.address += $(el).text();
    
    data.push({
        locationName : $(el).children('h4').text(),
        address : $(el).text()
    });
});

console.log(data)

// fs.writeFileSync('data/zone8-location_data.txt', data);
fs.writeFileSync('data/zone8-location_data.json', data);