import express from "express";
import offersRoutes from "./offers.routes";

const router = express.Router();

router.use("/offers", offersRoutes);

export default router;
