const router = require("express").Router();
const billsController = require("../../controllers/billsController");


router.route("/all")
    .get(billsController.findAllBills);

router.route("/:id")
    .get(billsController.findByBillId);

router.route("/:title")
    .get(billsController.findByTitle);

router.route("/:sponsorState")
    .get(billsController.findBySponsorState);

router.route("/:sponsorParty")
    .get(billsController.findBySponsorParty);

router.route("/:introDate")
    .get(billsController.findByIntroducedDate);


module.exports = router;
