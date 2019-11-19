const db = require("../models/bills");
console.log(db);
module.exports = {
    findAllBills: function(req, res) {


        db
            .find()
            .sort({ state: 0 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },


    findAllVotes: function(req, res) {
        console.log("Back");
        db
            .find()
            .select("votingRecord")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findAllVotesByState: function(req, res) {
        console.log(res);
        db
            .find({ state: req.params.state })
            .select("votingRecord")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
