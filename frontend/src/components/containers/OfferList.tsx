import React, { useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchOffers } from "../../services/api-offers";
import OfferCard from "../UIElements/OfferCard";
import { Offer } from "../../types/Offer";

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
    <div className="p-4 max-w-lg mx-auto">
      {data?.pages.map((page, pageIndex) =>
        page.offers.map((offer: Offer, index: number) => (
          <div key={offer.id} ref={pageIndex === data.pages.length - 1 && index === page.offers.length - 1 ? lastOfferRef : null}>
            <OfferCard offer={offer} />
          </div>
        ))
      )}
      {isFetching && <p>Loading more offers...</p>}
    </div>
  );
};

export default OfferList;
