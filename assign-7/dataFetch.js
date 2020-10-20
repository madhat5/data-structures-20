// console.log('sim sim salabim')

let request = require('request');
let fs = require('fs');

let n = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

let dataModel = {
    url: '',
    borough: '',
    meeting: {
        location: '',
        address: '',
        hours: '',
        notes: ''
    }
}

let scrapePage = function(count) {
    request('https://parsons.nyc/aa/m' + count + '.html', function(err, res, body){
        if (!err && res.statusCode == 200) {
            fs.writeFileSync('/home/ec2-user/environment/assign-7/data/aa_pg' + count + '.txt', body);
            
            console.log('site visited |', 'https://parsons.nyc/aa/m' + count + '.html')
        }
        else {console.log("Request failed!")}
    });
}

// turn into forEach
for (let i = 0; i < n.length; i++) {
    let count = n[i]
    // console.log(count, +count)
    // console.log('https://parsons.nyc/aa/m' + count + '.html')
    
    scrapePage(count)
}