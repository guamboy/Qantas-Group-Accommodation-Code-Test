import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App.tsx";

test("renders the component", () => {
  render(<App />);

  const headerText = screen.getByText("5");

  expect(headerText).toBeInTheDocument();
});

test("changes sorting option when price-low-high is selected", () => {
  render(<App />);

  const selectElement = screen.getByTestId("sort-data");
  fireEvent.change(selectElement, { target: { value: "price-low-high" } });

  const hotelContainers = screen.queryAllByTestId("hotel-container");
  expect(hotelContainers[0]).toHaveTextContent("Rydges World Square Sydney");
});

test("changes sorting option when price-high-low is selected", () => {
  render(<App />);

  const selectElement = screen.getByTestId("sort-data");
  fireEvent.change(selectElement, { target: { value: "price-high-low" } });

  const hotelContainers = screen.queryAllByTestId("hotel-container");
  expect(hotelContainers[0]).toHaveTextContent(
    "PARKROYAL Darling Harbour Sydney"
  );
});
