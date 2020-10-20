// console.log('sim sim salabim')
// All zones

let fs = require('fs');
let cheerio = require('cheerio');

let dataModel = [{
    locationName: '',
    address: ''
}];

let data = [];

let fileName = [
    'aa_pg01.txt', 'aa_pg02.txt', 'aa_pg03.txt', 'aa_pg04.txt', 'aa_pg05.txt',
    'aa_pg06.txt', 'aa_pg07.txt', 'aa_pg08.txt', 'aa_pg09.txt', 'aa_pg10.txt'
]

fileName.forEach((zoneEl, zoneI) => {
    // console.log(el)
    let content = fs.readFileSync('data/' + zoneEl);

    let $ = cheerio.load(content);

    // element query selector for locations
    let queryEl = $("body > center > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > div > table > tbody > tr > td:first-child");
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

        tempEl = tempEl
            .substring(tempEl.match(/\d/)["index"])
            .replace(/\r\n|\n|\r|\t/gm, "")
            .replace(/,.*$/, "")

        // console.log(tempEl);

        data.push({
            locationName: $(el).children('h4').text(),
            address: tempEl,
            zone: zoneI + 1
            // .trim()

            // regex alwars starts+ends with // and with separated by |
            // /regex stuff | and more stuff /
            // g m i are individual flags

            // other methods: split, match 
        });
    });


// console.log(data)

// fs.writeFileSync('data/zone' + (zoneI + 1) + '-location_data.json', JSON.stringify(data), data);

})
// fs.writeFileSync('data/allZones-location_data.json', JSON.stringify(data), data);


function writeFile(fsName, fsData) {
    fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete for', fsName);
};

// console.log(cleanData.length)
writeFile('allZones-location_data', data);


// Avenue, Ave, Street, St.
// build function to load allZones and clean copy that comes after items above