import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

// /api/restaurant/seatch/london
router.get("/search/:city", param("city").isString().trim().notEmpty().withMessage("City parament must be a valid string"),
RestaurantController.searchRestaurant);

router.get("/:restaurantId", param("restaurantId").isString().trim().notEmpty().withMessage("RestaurantId parament must be a valid string"),
RestaurantController.getRestaurant)

export default router;