const router = require("express").Router();
const repsController = require("../../controllers/repsController");
// console.log(repsController);

router.route("/all")
    .get(repsController.findAll);

router.route("/:id")
.get(repsController.findById);

router.route("/state/:state")
    .get(repsController.findByState);

router.route("/chamber/:chamber")
    .get(repsController.findByChamber);

router.route("/gender/:gender")
    .get(repsController.findByGender);

router.route("/party/:party")
    .get(repsController.findByParty);

router.route("/chamber/:chamber/state/:state")
    .get(repsController.findByChamberAndState);

router.route("/chamber/:chamber/party/:party")
    .get(repsController.findByChamberAndParty);

router.route("/chamber/:chamber/gender/:gender")
    .get(repsController.findByChamberAndGender);

router.route("/party/:party/state/:state")
    .get(repsController.findByPartyAndState);

router.route("/gender/:gender/party/:party")
    .get(repsController.findByGenderAndParty);


module.exports = router;
