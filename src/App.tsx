import { useState } from "react";

import qantasLogo from "./assets/qantas-logo.png";
import HotelContainer from "./components/HotelContainer";
import SortBy from "./components/SortBy";
import { useHotelData } from "./hooks/useHotelData";
import { useSortedHotelData } from "./hooks/useSortedHotelData";

import "./App.css";

function App(): JSX.Element {
  const [sortOption, setSortOption] = useState<string>("");

  const hotelData = useHotelData();
  const sortedHotelData = useSortedHotelData(hotelData, sortOption);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={qantasLogo} className="logo" alt="Qantas logo" />
        </a>
      </div>

      <div className="header">
        <h6 aria-label="hotel-info">
          <b>{sortedHotelData ? sortedHotelData.length : 0}</b> <i>hotels</i> in{" "}
          <b>Sydney</b>
        </h6>

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
