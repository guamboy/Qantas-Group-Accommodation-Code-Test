import { HotelRating, HotelRatingTypeEnum } from "../../../types/types";
import "./Rating.css";

export const Rating = ({ ratingType, ratingValue }: HotelRating) => {
  const maxRating = 5;
  const wholeStars = Math.floor(ratingValue);
  const fractionalPart = ratingValue - wholeStars;

  const ratingShapes = Array.from({ length: maxRating }).map((_, index) => {
    // Grey rating
    let percentageGrey = 100;
    let percentageYellow = 0;

    switch (true) {
      // Yellow rating
      case index < wholeStars:
        percentageGrey = 0;
        percentageYellow = 100;
        break;
      // Mixed rating
      case index === wholeStars && fractionalPart > 0:
        percentageGrey = (1 - fractionalPart) * 100;
        percentageYellow = 100 - percentageGrey;
        break;
    }

    const ratingShape =
      ratingType === HotelRatingTypeEnum.self ? "circle" : "star";

    return (
      <span
        key={index}
        className={ratingShape}
        style={{
          background: `linear-gradient(90deg, #f4e704 0 ${percentageYellow}%, #dfdee0 0 ${percentageGrey}%)`,
        }}
      ></span>
    );
  });

  return <div className="hotel-rating">{ratingShapes}</div>;
};
