const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
     title: {type: String, required: true},
     bill_id: {type: String, required: true},
     sponsorState: {type: String, required: true},
     sponsorParty: {type: String, required: true},
     summary: {type: String},
     primarySubject: {type: String},
     introducedDate: {type: String, required: true},
     latestMAction: {type: String},
     latestMActionDate: {type: String}
});

const Bills = mongoose.model("Bills", billSchema);

module.exports = Bills;
