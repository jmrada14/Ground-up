const db = require("../models/representatives");
console.log(db);
module.exports = {
    findById: function (req, res) {
        db
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
   console.log(req.params.id)

    },
    findByState: function (req, res) {
        db
            .findByState(req.params.state)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.state)

    },
    findByChamber: function (req, res) {
        db
            .findByChamber(req.params.chamber)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.chamber)

    },
    findByGender: function (req, res) {
        db
            .findByGender(req.params.gender)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.gender)

    },
    findByParty: function (req, res) {
        db
            .findByParty(req.params.party)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(req.params.party)

    }
};


