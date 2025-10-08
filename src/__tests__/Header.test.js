import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders the Header with the correct title", () => {
  render(<Header title="My Blog" />);
  const headingElement = screen.getByText(/My Blog/i);
  expect(headingElement).toBeInTheDocument();
});
