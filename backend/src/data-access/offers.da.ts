import { Offer } from "../models/offers.model";

// Creating a mock dataset of 50 offers for testing purposes
const OFFERS_MOCK: Offer[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1, // Unique ID for each offer
  title: `Offer ${i + 1}`, // Title with a unique number
  img_url: "/cartoon-style-game.webp", // Static image URL (assumes it's in the public folder)
  description: "This is a sample offer description", // Placeholder description
  os: ["ios", "android", "web"][Math.floor(Math.random() * 3)] as "ios" | "android" | "web", // Randomly assign an OS
  badges: ["Gaming", "Multireward"], // Default badges
  payout: Math.floor(Math.random() * 100), // Random payout value (0-99)
  bonusPayout: Math.random() > 0.5 ? Math.floor(Math.random() * 50) : undefined, // 50% chance of having a bonus payout
}));

// Function to retrieve paginated offers from the mock database
export const getOffersFromDB = (page: number, pageSize: number) => {
  const startIndex = (page - 1) * pageSize; // Calculate starting index based on page number
  const endIndex = startIndex + pageSize; // Calculate end index

  return {
    offers: OFFERS_MOCK.slice(startIndex, endIndex), // Return the paginated slice of offers
    hasMore: endIndex < OFFERS_MOCK.length, // Boolean indicating if more offers are available
  };
};
