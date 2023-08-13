import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.CreateUser);
router.post("/profile", UserController.CreateOrUpdateUser);
router.get("/", UserController.GetUser);
router.get("/:id", UserController.GetSingleUser);

export const UserRoutes = router;
