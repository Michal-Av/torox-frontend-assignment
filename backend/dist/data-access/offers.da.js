"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffersFromDB = void 0;
const OFFERS_MOCK = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Offer ${i + 1}`,
    img_url: "https://via.placeholder.com/150",
    description: "This is a sample offer description",
    os: ["ios", "android", "web"][Math.floor(Math.random() * 3)],
    badges: ["Gaming", "Multireward"],
    payout: Math.floor(Math.random() * 100),
    bonusPayout: Math.random() > 0.5 ? Math.floor(Math.random() * 50) : undefined,
}));
const getOffersFromDB = (page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return {
        offers: OFFERS_MOCK.slice(startIndex, endIndex),
        hasMore: endIndex < OFFERS_MOCK.length,
    };
};
exports.getOffersFromDB = getOffersFromDB;
