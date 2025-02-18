import React, { useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchOffers } from "../../services/api-offers";
import OfferCard from "../UIElements/OfferCard";
import { Offer } from "../../types/Offer";
import { Grid, Box, Typography } from "@mui/material";

const OfferList: React.FC = () => {
  // Fetch offers using useInfiniteQuery with pagination support
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["offers"], // Unique key for caching and refetching
    queryFn: ({ pageParam = 1 }) => fetchOffers(pageParam), // Function to fetch data, defaulting pageParam to 1
    initialPageParam: 1, // The first page to load
    getNextPageParam: (lastPage, pages) => (lastPage.hasMore ? pages.length + 1 : undefined), // Determines the next page to load
  });

  // Intersection Observer to detect when the user reaches the last offer
  const observer = useRef<IntersectionObserver | null>(null);
  const lastOfferRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching) return; // If data is already being fetched, do nothing
      if (observer.current) observer.current.disconnect(); // Disconnect any existing observer to prevent duplicates

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage(); // Load the next page when the last item is visible
        }
      });

      if (node) observer.current.observe(node); // Attach observer to the last item in the list
    },
    [isFetching, hasNextPage, fetchNextPage]
  );

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #543ca6 0%, #0a1f59 50%, #1d266d 100%)",
        minHeight: "100vh",
        py: 4,
      }}
    >
      {/* Title for the offers list */}
      <Typography variant="h4" sx={{ textAlign: "center", color: "white", mb: 4 }}>
        Top Offers
      </Typography>

      {/* Grid container for displaying offers */}
      <Grid container spacing={3} justifyContent="center">
        {data?.pages.map((page, pageIndex) =>
          page.offers.map((offer: Offer, index: number) => (
            <Grid
              key={offer.id}
              item
              xs={12} // Full width on extra small screens
              sm={6} // Two columns on small screens and above
              ref={pageIndex === data.pages.length - 1 && index === page.offers.length - 1 ? lastOfferRef : null} // Attach observer to the last item
            >
              <OfferCard offer={offer} />
            </Grid>
          ))
        )}
      </Grid>

      {/* Display loading text when fetching new offers */}
      {isFetching && (
        <Typography sx={{ textAlign: "center", color: "white" }}>
          Loading more offers...
        </Typography>
      )}
    </Box>
  );
};

export default OfferList;
