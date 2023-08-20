import qantasLogo from "./assets/qantas-logo.png";

import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { HotelDataType, mockHotelData } from "./data/data";
import HotelContainer from "./components/HotelContainer";
import SortBy from "./components/SortBy";

function App(): JSX.Element {
  const [hotelData, setHotelData] = useState<HotelDataType[] | null>(null);
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    setHotelData(mockHotelData.results as HotelDataType[]);
  }, []);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const sortedHotelData = useMemo(() => {
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

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={qantasLogo} className="logo" alt="Qantas logo" />
        </a>
      </div>

      <div className="header">
        <p>
          <b>{sortedHotelData ? sortedHotelData.length : 0}</b> <i>hotels</i> in{" "}
          <b>Sydney</b>
        </p>

        <SortBy sortOption={sortOption} handleSortChange={handleSortChange} />
      </div>

      <div className="list">
        {sortedHotelData?.map((hotel) => (
          <HotelContainer
            key={hotel.id}
            imgUrl={hotel.property.previewImage.url}
            hotelName={hotel.property.title}
            address={hotel.property.address}
            offerName={hotel.offer.name}
            cancellationPolicy={hotel.offer.cancellationOption.cancellationType}
            displayPrice={hotel.offer.displayPrice}
            savings={hotel.offer.savings}
            hotelRating={hotel.property.rating}
            dealTitle={hotel.offer.promotion.title}
          />
        ))}
      </div>
    </>
  );
}

export default App;
