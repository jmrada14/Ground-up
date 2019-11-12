//IT IS WORKING BUDDY!!!
// const dotenv = require('dotenv');
const axios = require('axios');

const states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC"];


const db = require("../models/representatives");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ground-up');
////////////////////////
const resultsFunction = (chamber, state, response) => {
    // console.log(response.data.results);
    let dataArray = response.data.results;
    // console.log(dataArray)
    for (let i = 0; i < dataArray.length; i++) {
        // console.log(state);
        // console.log(chamber);
        let repName = dataArray[i].name;
        // console.log(repName);
        let repRole = dataArray[i].role;
        // console.log(repRole);
        let repGender = dataArray[i].gender;
        // console.log(repGender);
        let repParty = dataArray[i].party;
        // console.log(repParty);

        let repSocialM = {
            tw: dataArray[i].twitter_id,
            facebook: dataArray[i].facebook_acount
        };
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
        db.find().then(res => console.log(res.length));
    }
};


states.forEach(state => {
    axios.request({
        url: `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`,
        headers: {'X-API-Key': '9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC'},
        method: 'get'
    }).then(response => resultsFunction("senate", state, response)).catch(error => {
        console.log(error);
    });

    axios.request({
        url: `https://api.propublica.org/congress/v1/members/house/${state}/current.json`,
        headers: {'X-API-Key': '9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC'},
        method: 'get'
    }).then(response => resultsFunction("house", state, response)).catch(error => {
        console.log(error);
    });
});
