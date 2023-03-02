const { createUser, showuser } = require("./userController");

const router = require("express").Router();

//routes with the method they callback
router.post("/api/users", createUser);

router.get("/apis", showuser);

module.exports = router;
