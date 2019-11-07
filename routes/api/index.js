const router = require("express").Router();
const repRoutes = require("./reps");
const userRoutes = require("./users")

// Book routes
router.use("/members", repRoutes);
router.use("/users", userRoutes);
module.exports = router;
