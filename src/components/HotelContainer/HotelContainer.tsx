import { CancellationType, HotelRating, Price } from "../../data/data";
import Rating from "./Rating";
import { formatAmount, formatCancellationType, truncateString } from "./utils";
import "./HotelContainer.css";

interface HotelContainerProps {
  imgUrl: string;
  hotelName: string;
  address: string[];
  offerName: string;
  cancellationPolicy: CancellationType;
  displayPrice: Price;
  savings?: Price | null;
  hotelRating: HotelRating;
  dealTitle: string;
}

export const HotelContainer: React.FC<HotelContainerProps> = (props) => {
  const {
    displayPrice,
    imgUrl,
    hotelName,
    address,
    offerName,
    cancellationPolicy,
    savings,
    hotelRating,
    dealTitle,
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
