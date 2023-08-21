import { render, screen } from "@testing-library/react";
import { HotelContainer, HotelContainerProps } from "./HotelContainer";
import {
  CancellationType,
  Currency,
  HotelRatingTypeEnum,
} from "../../data/data";

const mockHotelData: HotelContainerProps = {
  address: ["7-11 Talavera Rd", "North Ryde"],
  cancellationPolicy: CancellationType.NOT_REFUNDABLE,
  dealTitle: "Exclusive Deal",
  displayPrice: { amount: 329, currency: Currency.AUD },
  hotelName: "Courtyard by Marriott Sydney-North Ryde",
  hotelRating: { ratingValue: 3.5, ratingType: HotelRatingTypeEnum.self },
  imgUrl: "https://unsplash.it/145/125/?random",
  offerName: "Deluxe Balcony Room",
  savings: { amount: 30, currency: Currency.AUD },
};

test("renders hotel container correctly", () => {
  render(
    <HotelContainer
      address={mockHotelData.address}
      cancellationPolicy={mockHotelData.cancellationPolicy}
      dealTitle={mockHotelData.dealTitle}
      displayPrice={mockHotelData.displayPrice}
      hotelName={mockHotelData.hotelName}
      hotelRating={mockHotelData.hotelRating}
      imgUrl={mockHotelData.imgUrl}
      offerName={mockHotelData.offerName}
      savings={mockHotelData.savings}
    />
  );

  const hotelName = screen.getByText("Courtyard by Marriott Sydney-Nor...");
  const address = screen.getByText(mockHotelData.address.join(", "));
  const offerName = screen.getByText(mockHotelData.offerName);

  expect(hotelName).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(offerName).toBeInTheDocument();
});
