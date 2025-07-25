import {Router} from "express";
import { UserController } from "../controllers/userController";

const router = Router()

//User routes
router.post("/user", UserController.createUser);
router.get("/user/:userId", UserController.readUser);
router.get("/users", UserController.readAllUsers);
router.put("/user/:userId", UserController.updateUser);
router.delete("/user/:userId", UserController.deleteUser);
router.post("/user/upsert/:userId", UserController.upsertUser);


export default router;