const router = require("express").Router();
const repsController = require("../../controllers/repsController");

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


module.exports = router;
