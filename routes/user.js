const express = require("express");
const router = express.Router();
const { handleGetAllUsers, handleupdateUserById, handlegetUserById, handledeleteUserById, handlecreateUserById } = require("../controllers/user")
// ROUTES

// Get all users

router.route("/")
.get(handleGetAllUsers)
.post( handlecreateUserById);

// Get user by ID
router.route("/:id")
    .get(handlegetUserById)
    .patch(handleupdateUserById)
    .delete(handledeleteUserById);

// Create a new user

module.exports = router;