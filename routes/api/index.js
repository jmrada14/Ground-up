const router = require("express").Router();
const repRoutes = require("./reps");

// Book routes
router.use("/members", repRoutes);

module.exports = router;
