const https = require('https');

https.get('https://api.propublica.org/congress/v1/115/senate/members.json', {'X-API-key':"9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC"}
, (resp) => {
    let data = '';
        console.log('statusCode:', resp.statusCode);
        console.log('headers:', resp.headers);
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
// const axios = require('axios');
//
// axios.all([
//     axios.get('"https://api.propublica.org/congress/v1/115/senate/members.json"', {
//         headers:
//     {'X-API-key': "9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC"}
//     })
// ])
//     .then(axios.spread((response) => {
//     console.log(response.data.url);
// })).catch(error => {
//     console.log(error);
// });
//
//
