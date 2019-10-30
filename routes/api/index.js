const router = require("express").Router();
const repRoutes = require("./reps");

// Book routes
router.use("/reps", repRoutes);

module.exports = router;
