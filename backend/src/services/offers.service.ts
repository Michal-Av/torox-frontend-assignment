import { getOffersFromDB } from "../data-access/offers.da";

export const getOffersService = (page: number) => {
  const pageSize = 10;
  return getOffersFromDB(page, pageSize);
};
