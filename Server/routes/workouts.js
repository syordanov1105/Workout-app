import express from "express";
import {getAllWO, getOneWO, createWO, deleteWO, updateWO} from "../controllers/woController.js";
import requireAuth from "../middleware/requireauth.js";

const router = express.Router();
router.use(requireAuth);

//GET all workouts
router.get("/", getAllWO);

//GET a single workout
router.get("/:id", getOneWO);

//POST a new workout
router.post("/", createWO);

//DELETE a workout
router.delete("/:id", deleteWO);

//UPDATE a workouts
router.patch("/:id", updateWO);

export default router;
