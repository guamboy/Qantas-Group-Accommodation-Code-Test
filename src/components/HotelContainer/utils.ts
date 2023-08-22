import { CancellationType, Currency, Price } from "../../types/types";

export const formatAmount = ({ currency, amount }: Price): string => {
  const numberFormat = numberFormatForCurrency(currency);
  return numberFormat.format(amount);
};

const numberFormatForCurrency = (currency: Currency): Intl.NumberFormat => {
  switch (currency) {
    case Currency.AUD:
      return new Intl.NumberFormat("en-AU", {
        maximumFractionDigits: 0,
      });
    // Add other currency
    default:
      throw new Error(`Unsupported currency: ${currency}`);
  }
};

export function formatCancellationType(
  cancellationType: CancellationType
): string {
  switch (cancellationType) {
    case CancellationType.FREE_CANCELLATION:
      return "Free Cancellation";
    case CancellationType.NOT_REFUNDABLE:
      return "Not Refundable";
    // Add other cancellation types here
  }
}

interface TruncateString {
  text: string;
  maxLength: number;
}

export function truncateString({ text, maxLength }: TruncateString): string {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
