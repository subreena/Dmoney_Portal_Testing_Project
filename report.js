const newman = require('newman');
require('dotenv').config();
 
newman.run({

    collection:`https://api.postman.com/collections/12885463-386a2449-0add-4b6d-9d1e-b52b50e3d568?access_key=${process.env.PMAT_KEY}`,
    
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});