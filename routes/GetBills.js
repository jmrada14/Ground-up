//IT IS WORKING BUDDY!!!
const dotenv = require('dotenv');
const axios = require('axios');
const subject = "internet"
// const db = require("../models/bills");
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/ground-up');
////////////////////////
axios.request({
    url: `https://api.propublica.org/congress/v1/bills/subjects/${subject}.json`,
    headers: { 'X-API-Key': '9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC' },
    method: 'get'
}).then(response => {
    // console.log(response.data);
    let dataArray = response.data.results;
    for (let i = 0; i < dataArray.length; i++){
        // console.log(dataArray[i])
    let title = dataArray.title[i]
        console.log(title)
    }
    let billsObj = {


    }
//         console.log(billsObj);
// /////////////////////////////////////
//         db.create(billsObj);

    // }
}).catch(error => {
    console.log(error);
});
