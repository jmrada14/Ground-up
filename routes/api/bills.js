const router = require("express").Router();
const billsController = require("../../controllers/billsController");


router.route("/all")
    .get(billsController.findAllBills);

router.route("/voterecord")
    .get(billsController.findAllVotes);

router.route("/voterecord/:state")
    .get(billsController.findAllVotesByState);


module.exports = router;
