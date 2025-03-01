import userController from "../controller/userController";
import express from "express";
import authAdmin from "../middleware/authAdmin";

const router = express.Router();

router.post("/create", userController.createUser);
router.get("/get", authAdmin, userController.getUser);
router.put("/edit/:id", userController.editUser);
router.delete("/delete/:id", userController.deleteUser);
router.post("/login", userController.login);

export default router;
