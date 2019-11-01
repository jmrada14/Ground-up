//IT IS WORKING BUDDY!!!
// const dotenv = require('dotenv');
const axios = require('axios');
const subject = "climate pollution environment";
const db = require("../models/bills");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ground-up');
////////////////////////
axios.request({
    url: `https://api.propublica.org/congress/v1/bills/search.json?query=${subject}`,
    headers: { 'X-API-Key': '9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC' },
    method: 'get'
}).then(response => {
    // console.log(response.data);
    let dataArray = response.data.results[0].bills;
 // console.log(dataArray);
    for (let i = 0; i < dataArray.length; i++){
        // console.log(dataArray[i])

        let title = dataArray[i].title;
        console.log("title: " + title);

        let sponsorState = dataArray[i].sponsor_state;
        console.log("Sponsor state: " + sponsorState);

        let sponsorParty = dataArray[i].sponsor_party;
        console.log("Sponsor party: " + sponsorParty);

        let summary = dataArray[i].summary;
        console.log("Summary: " + summary);

        let primarySubject = dataArray[i].summary;
        console.log("Primary subject: " + primarySubject);

        let introducedDate = dataArray[i].introduced_date;
        console.log("introduced date: " + introducedDate);

        let latestMAction = dataArray[i].latest_major_action;
        console.log("LMA: " + latestMAction);

        let latestMActionDate = dataArray[i].latest_major_action_date;
        console.log("LMAD: " + latestMActionDate);

        let billsObj = {
            title: title,
            sponsorState: sponsorState,
            sponsorParty: sponsorParty,
            summary: summary,
            primarySubject: primarySubject,
            introducedDate: introducedDate,
            latestMAction: latestMAction,
            latestMActionDate: latestMActionDate
        };

        console.log(billsObj);

        db.create(billsObj);



    }

}).catch(error => {
    console.log(error);
});
