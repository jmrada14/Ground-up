const db = require("../models/representatives");
console.log(db);
module.exports = {
    findAll: function(req, res) {
        console.log(findAll);
        db
            .find(req.query)
            .sort({ state: 0 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
   console.log(req.params.id)

    },
    findByState: function (req, res) {
        db
            .find({ state: req.params.state })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.state)

    },

    findByChamber: function (req, res) {
        db
            .find({ chamber: req.params.chamber })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.chamber)

    },
    findByGender: function (req, res) {
        db
            .find({ gender: req.params.gender })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.gender)

    },
    findByParty: function (req, res) {
        db
            .find({ party: req.params.party })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.party)

    },
    findByChamberAndState: function (req, res) {
        db
            .find({ chamber: req.params.chamber, state: req.params.state })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    findByChamberAndParty: function (req, res) {
        db
            .find({ chamber: req.params.chamber, party: req.params.party })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    findByChamberAndGender: function (req, res) {
        db
            .find({ chamber: req.params.chamber, gender: req.params.gender })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    findByPartyAndState: function (req, res) {
        db
            .find({ party: req.params.party, state: req.params.state })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    findByGenderAndParty: function (req, res) {
        db
            .find({ gender: req.params.gender, party: req.params.party })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
};


