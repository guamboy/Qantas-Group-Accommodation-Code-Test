import { useEffect, useState } from "react";

import { HotelDataType } from "../types/types";
import { fetchData } from "../utils/api";

export function useHotelData() {
  const [hotelData, setHotelData] = useState<HotelDataType[] | null>(null);

  useEffect(() => {
    fetchData()
      .then((response) => setHotelData(response.results))
      .catch((error: Error) => console.error("Error:", error));
  }, []);

  return hotelData;
}
