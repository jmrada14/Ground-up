const axios = require('axios');

axios.all([
    axios.get('"https://api.propublica.org/congress/v1/115/senate/members.json"', {
        headers: {
            key: 'X-API-key: 9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC'
        }
    })]).then(axios.spread((response1) => {
    console.log(response1.data.url);
})).catch(error => {
    console.log(error);
});


