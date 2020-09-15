// console.log('sim sim salabim')

var request = require('request');
var fs = require('fs');

var n = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

var dataModel = {
    url: '',
    borough: '',
    meetingZone: '',
    meeting: {
        location: '',
        address: '',
        hours: '',
        notes: ''
    }
}

var scrapePage = function(count) {
    // look into template string instead
    request('https://parsons.nyc/aa/m' + count + '.html', function(err, res, body){
        if (!err && res.statusCode == 200) {
            fs.writeFileSync('/home/ec2-user/environment/assign-1/data/aa_pg' + count + '.txt', body);
            
            console.log('site visited |', 'https://parsons.nyc/aa/m' + count + '.html')
        }
        else {console.log("Request failed!")}
    });
}

for (let i = 0; i < n.length; i++) { // use let instead of var
    let count = n[i]
    // console.log(count, +count) use parseInt/parseFloat/new Number
    // console.log('https://parsons.nyc/aa/m' + count + '.html')
    
    scrapePage(count)
}

