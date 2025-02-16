import { Request, Response } from "express";
import { getOffersService } from "../services/offers.service";

export const getOffers = (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  if (isNaN(page) || page < 1) {
    return res.status(400).json({ error: "Invalid page number" });
  }

  const data = getOffersService(page);
  res.json(data);
};
