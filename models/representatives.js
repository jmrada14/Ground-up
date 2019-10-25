const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  representativeSchema = new Schema({
    name: {type: String, required: true},//Full name
    role: {type: String, required:true},//Role
    gender: {type: String, required:true},// F-M or other if applies
    party: {type: String, required:true},//nothing to comment
    socialMedia: {type: Object, required:true},//social media such as tw-fb-youtube
    // add more if desired, this is the data we get:
    /*
    "https://api.propublica.org/congress/v1/members/{senate}/{FL}/current.json" -H "X-API-Key: 9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC"
{
   "status":"OK",
   "copyright":"Copyright (c) 2019 Pro Publica Inc. All Rights Reserved.",
   "results":[
      {
         "id": "S001217",
         "name": "Rick Scott",
         "first_name": "Rick",
         "middle_name": null,
         "last_name": "Scott",
         "suffix": null,
         "role": "Senator, 1st Class",
         "gender": "M",
         "party": "R",
         "times_topics_url": null,
         "twitter_id": "SenRickScott",
         "facebook_account": null,
         "youtube_id": null,
         "seniority": "1",
         "next_election": "2024",
         "api_uri": "https://api.propublica.org/congress/v1/members/S001217.json"
      },
      {
         "id": "R000595",
         "name": "Marco Rubio",
         "first_name": "Marco",
         "middle_name": null,
         "last_name": "Rubio",
         "suffix": null,
         "role": "Senator, 3rd Class",
         "gender": "M",
         "party": "R",
         "times_topics_url": "",
         "twitter_id": "SenRubioPress",
         "facebook_account": "SenatorMarcoRubio",
         "youtube_id": "SenatorMarcoRubio",
         "seniority": "9",
         "next_election": "2022",
         "api_uri": "https://api.propublica.org/congress/v1/members/R000595.json"
      }
]}
     */
});

const Reps = mongoose.model("Reps", representativeSchema);

module.exports = Reps;
