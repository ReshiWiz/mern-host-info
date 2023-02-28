import express from "express";
import {
  addUser,
  getUsers,
  getUser,
  editUser,
  deleteUser,
} from "../userController/userController.js";
const router = express.Router();

router.post("/signup", addUser);
router.get("/userinfo", getUsers);
router.get("/:id", getUser); // get the user by id
router.put("/:id", editUser); // edit the user
// router.delete("/:id", deleteUser); // delete the user
router.delete("/:id", deleteUser);
export default router;



