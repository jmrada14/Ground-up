const db = require("../../models/representatives");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ground-up');
 db.find().then(res => console.log(res.length));

