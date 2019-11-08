const db = require("../models/bills");
console.log(db);
module.exports = {
    findAllBills: function(req, res) {

        db
            .find(req.query)
            .sort({ state: 0 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByBillId: function (req, res) {
        db
            .find({ bill_id: req.params.bill_id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.bill_id)

    },

    findByTitle: function (req, res) {
        db
            .find({ title: req.params.title })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.title)

    },
    findBySponsorState: function (req, res) {
        db
            .find({ sponsorState: req.params.sponsorState })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.sponsorState)

    },
    findBySponsorParty: function (req, res) {
        db
            .find({ sponsorParty: req.params.sponsorParty })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.sponsorParty)

    },
    findByIntroducedDate: function (req, res) {
        db
            .find({ introducedDate: req.params.introducedDate})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

};
