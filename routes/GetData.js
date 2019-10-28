//IT IS WORKING BUDDY!!!
const axios = require('axios');

axios.request({
    url: "https://api.propublica.org/congress/v1/members/house/FL/current.json",
    headers: { 'X-API-Key': "9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC" },
    method: 'get'
}).then(response => {
    // console.log(response.data.url);
    console.log(response.data)
}).catch(error => {
    console.log(error);
});
