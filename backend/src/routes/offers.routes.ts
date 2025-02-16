import express from "express";
import { getOffers } from "../controllers/offers.controller";

const router = express.Router();

router.get("/", getOffers);

export default router;
