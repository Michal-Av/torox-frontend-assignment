import React, { useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchOffers } from "../../services/api-offers";
import OfferCard from "../UIElements/OfferCard";
import { Offer } from "../../types/Offer";
import { Grid, Box, Typography } from "@mui/material";

const OfferList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["offers"],
    queryFn: ({ pageParam = 1 }) => fetchOffers(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => (lastPage.hasMore ? pages.length + 1 : undefined),
  });

  const observer = useRef<IntersectionObserver | null>(null);
  const lastOfferRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetching, hasNextPage, fetchNextPage]
  );

  return (
    <Box sx={{ background: "linear-gradient(135deg, #543ca6 0%, #0a1f59 50%, #1d266d 100%)", minHeight: "100vh", py: 4 }}>
      <Typography variant="h4" sx={{ textAlign: "center", color: "white", mb: 4 }}>
        Top Offers
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {data?.pages.map((page, pageIndex) =>
          page.offers.map((offer: Offer, index: number) => (
            <Grid
              key={offer.id}
              item
              xs={12}
              sm={6} 
              ref={pageIndex === data.pages.length - 1 && index === page.offers.length - 1 ? lastOfferRef : null}
            >
              <OfferCard offer={offer} />
            </Grid>
          ))
        )}
      </Grid>
      {isFetching && <Typography sx={{ textAlign: "center", color: "white" }}>Loading more offers...</Typography>}
    </Box>
  );
};

export default OfferList;
