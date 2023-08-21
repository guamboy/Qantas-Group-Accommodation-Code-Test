import { useMemo } from "react";

import { HotelDataType } from "../data/data";

export function useSortedHotelData(
  hotelData: HotelDataType[] | null,
  sortOption: string
) {
  return useMemo(() => {
    if (sortOption === "price-low-high") {
      return hotelData
        ?.slice()
        .sort(
          (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
        );
    } else if (sortOption === "price-high-low") {
      return hotelData
        ?.slice()
        .sort(
          (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
        );
    } else {
      return hotelData;
    }
  }, [hotelData, sortOption]);
}
