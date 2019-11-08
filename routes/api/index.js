const router = require("express").Router();
const repRoutes = require("./reps");
const userRoutes = require("./users");
const billRoutes = require("./bills");

// Book routes
router.use("/members", repRoutes);
router.use("/users", userRoutes);
router.use("/bills", billRoutes);

module.exports = router;
