var randGen = require('rand-gen');

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

blogEntries.push(new BlogEntry(randGen().gen(), 'August 28 2020', "First week of class and work", true, false, ["core", "stretching"]));
blogEntries.push(new BlogEntry(randGen().gen(), 'September 1, 2020', "No more (f)unemployement", false, true, ["core"]));
blogEntries.push(new BlogEntry(randGen().gen(), 'September 15, 2020', "Rest and homework today", false, false));
blogEntries.push(new BlogEntry(randGen().gen(), 'September 25, 2020', "Full day today", true, true, ["stretching", "climbing"]));


console.log(blogEntries);