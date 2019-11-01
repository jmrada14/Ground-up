//IT IS WORKING BUDDY!!!
const dotenv = require('dotenv');
const axios = require('axios');
const state = "ny";
const chamber = "house";
const db = require("../models/representatives");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ground-up');
////////////////////////
axios.request({
    url: `https://api.propublica.org/congress/v1/members/${chamber}/${state}/current.json`,
    headers: { 'X-API-Key': '9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC' },
    method: 'get'
}).then(response => {
    // console.log(response.data.results);
    let dataArray = response.data.results;
    // console.log(dataArray)
    for (let i = 0; i < dataArray.length; i++){
        // console.log(state);
        // console.log(chamber);
        let repName= dataArray[i].name;
        // console.log(repName);
        let repRole= dataArray[i].role;
        // console.log(repRole);
        let repGender= dataArray[i].gender;
        // console.log(repGender);
        let repParty= dataArray[i].party;
        // console.log(repParty);
        let repSocialM= {tw: dataArray[i].twitter_id,
        facebook: dataArray[i].facebook_acount};
        // console.log(repSocialM);
        ///////////////////////////////
        const representativesObj = {
            name: repName,
            state: state,
            chamber: chamber,
            role: repRole,
            gender: repGender,
            party: repParty,
            socialMedia: repSocialM

        };

        console.log(representativesObj);
/////////////////////////////////////
         db.create(representativesObj);

    }
}).catch(error => {
    console.log(error);
});
