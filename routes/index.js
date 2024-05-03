const router = require("express").Router();

// Import our modular routers for /api/users and /api/thoughts
const userRoutes = require("./api/user-routes");
const thoughtRoutes = require("./api/thought-routes");

// Add '/users' and '/thoughts' prefixes to routes imported from 'user-routes' and 'thought-routes'
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
