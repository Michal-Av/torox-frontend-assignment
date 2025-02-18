"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffersService = void 0;
const offers_da_1 = require("../data-access/offers.da");
const getOffersService = (page) => {
    const pageSize = 10;
    return (0, offers_da_1.getOffersFromDB)(page, pageSize);
};
exports.getOffersService = getOffersService;
