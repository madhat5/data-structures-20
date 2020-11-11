var randGen = require('rand-gen');

var temperatureEntries = [];

class temperatureEntries {
  constructor(primaryKey, sortKey, date, temperatureActual, temperatureRm1, temperatureRm2, temperatureNotes) {
    this.pktemp = {};
    this.pktemp.N = primaryKey.toString();
    this.sktemp = {};
    this.sktemp.N = sortKey.toString();
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
    this.temperatureActual.S = temperatureActual;
    // this.temperatureRm1.S = temperatureRm1;
    // this.temperatureRm2.S = temperatureRm2;
    // this.temperatureNotes.S = temperatureNotes;
  }
}

// blogEntries.push(new BlogEntry(randGen().gen(), 'August 28 2020', "First week of class and work", true, false, ["core", "stretching"]));



console.log(temperatureEntries);