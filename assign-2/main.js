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
    
    let tempEl = $(el).text();
    
    tempEl= tempEl
        .substring(tempEl.match(/\d/)["index"])
        .replace(/\r\n|\n|\r|\t/gm,"")
        .replace(/,.*$/,"")
    
    console.log(tempEl);
    
    data.push({
        locationName : $(el).children('h4').text(),
        address : tempEl
            // regex alwars starts+ends with // and with separated by |
            // /regex stuff | and more stuff /
            // g m i are individual flags

            // other methods: split, match 
    });
});

// console.log(data)

fs.writeFileSync('data/zone8-location_data.json', JSON.stringify(data), data);

// get used to stringify + parse

