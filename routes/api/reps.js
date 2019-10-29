const router = require("express").Router();
const repsController = require("../../controllers/repsController");

router.route("/:id")
.get(repsController.findById);

router.route("/:state")
    .get(repsController.findByState);

router.route("/:chamber")
    .get(repsController.findByChamber);

router.route("/:gender")
    .get(repsController.findByGender);

router.route("/:party")
    .get(repsController.findByParty);


module.exports = router;
