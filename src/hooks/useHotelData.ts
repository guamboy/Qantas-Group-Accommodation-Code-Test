import { useEffect, useState } from "react";

import { HotelDataType, mockHotelData } from "../data/data";

export function useHotelData() {
  const [hotelData, setHotelData] = useState<HotelDataType[] | null>(null);

  useEffect(() => {
    setHotelData(mockHotelData.results as HotelDataType[]);
  }, []);

  return hotelData;
}
