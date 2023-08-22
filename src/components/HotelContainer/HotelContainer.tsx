import { CancellationType, HotelRating, Price } from "../../types/types";
import Rating from "./Rating";
import { formatAmount, formatCancellationType, truncateString } from "./utils";

import "./HotelContainer.css";

export interface HotelContainerProps {
  address: string[];
  cancellationPolicy: CancellationType;
  dealTitle: string;
  displayPrice: Price;
  hotelName: string;
  hotelRating: HotelRating;
  imgUrl: string;
  offerName: string;
  savings?: Price | null;
}

export const HotelContainer: React.FC<HotelContainerProps> = (props) => {
  const {
    address,
    cancellationPolicy,
    dealTitle,
    displayPrice,
    hotelName,
    hotelRating,
    imgUrl,
    offerName,
    savings,
  } = props;

  return (
    <div className="box" data-testid="hotel-container">
      <div className="image-container">
        <p className="overlay-text">{dealTitle}</p>
        <img src={imgUrl} className="hotel-img" alt="Hotel" />
      </div>

      <div className="details-and-price">
        <div>
          <div className="heading-with-rating">
            <h2>{truncateString({ text: hotelName, maxLength: 32 })}</h2>

            <Rating
              ratingType={hotelRating.ratingType}
              ratingValue={hotelRating.ratingValue}
            />
          </div>

          <p className="address">{address.join(", ")}</p>
          <p className="offer-name">{offerName}</p>
          <p className="cancellation">
            {formatCancellationType(cancellationPolicy)}
          </p>
        </div>
        <div>
          <p className="duration">
            <b>1</b> night total (AUD)
          </p>
          <p className="displayPrice">
            <span>$</span>
            {formatAmount(displayPrice)}
          </p>
          <p className="savings">
            {savings?.amount ? (
              <>
                Save ${formatAmount(savings)}
                <span>~</span>
              </>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
};
