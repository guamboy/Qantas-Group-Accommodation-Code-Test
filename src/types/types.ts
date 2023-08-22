export enum CancellationType {
  FREE_CANCELLATION = "FREE_CANCELLATION",
  NOT_REFUNDABLE = "NOT_REFUNDABLE",
}

export enum Currency {
  AUD = "AUD",
  // Other currenies
}

export interface Price {
  amount: number;
  currency: Currency;
}

export enum HotelRatingTypeEnum {
  self = "self",
  star = "star",
  // Other ratings
}

export interface HotelRating {
  ratingType: HotelRatingTypeEnum;
  ratingValue: number;
}

export interface HotelDataType {
  id: string;
  property: {
    propertyId: string;
    address: string[];
    title: string;
    previewImage: {
      url: string;
      caption: string;
      imageType: string;
    };
    rating: HotelRating;
  };
  offer: {
    promotion: {
      title: string;
      type: string;
    };
    name: string;
    displayPrice: {
      amount: number;
      currency: Currency;
    };
    savings?: {
      amount: number;
      currency: Currency;
    } | null;
    cancellationOption: {
      cancellationType: CancellationType;
    };
  };
}
