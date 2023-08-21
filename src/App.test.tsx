import { render, screen } from "@testing-library/react";

import App from "./App.tsx";

test("renders the component", () => {
  render(<App />);

  const headerElement = screen.getByRole("heading", { level: 6 });

  expect(headerElement).toHaveTextContent("5 hotels in Sydney");
});
