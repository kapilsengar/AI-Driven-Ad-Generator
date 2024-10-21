const express = require("express");
const authRouter = express.Router();
const jwtAuth = require("../middleware/jwtAuth.js");

const {
	signup,
	signIn,
	getUser,
	logout,
} = require("../controller/authController.js");

authRouter.post("/signup", signup);
authRouter.post("/signin", signIn);
authRouter.get("/user", jwtAuth, getUser);
authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
