const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  representativeSchema = new Schema({
    name: {type: String, required: true},//Full name
    role: {type: String, required:true},//Role
    gender: {type: String, required:true},
    party: {type: String, required:true},



});
