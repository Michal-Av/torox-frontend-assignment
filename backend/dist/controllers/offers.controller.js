"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffers = void 0;
const offers_service_1 = require("../services/offers.service");
const getOffers = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    if (isNaN(page) || page < 1) {
        return res.status(400).json({ error: "Invalid page number" });
    }
    const data = (0, offers_service_1.getOffersService)(page);
    res.json(data);
};
exports.getOffers = getOffers;
