const router = require("express").Router();
const billsController = require("../../controllers/billsController");


router.route("/all")
    .get(billsController.findAllBills);

router.route("/voterecord")
    .get(billsController.findAllVotes);

module.exports = router;
