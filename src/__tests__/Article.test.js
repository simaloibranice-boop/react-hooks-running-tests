import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("renders the article with title, date, and preview", () => {
  render(<Article title="React Testing" date="Oct 8, 2025" preview="Learn React testing" />);
  expect(screen.getByRole("heading", { name: /React Testing/i })).toBeInTheDocument();
  expect(screen.getByText(/Oct 8, 2025/i)).toBeInTheDocument();
  expect(screen.getByText(/Learn React testing/i)).toBeInTheDocument();
});

test("uses default date when no date prop is provided", () => {
  render(<Article title="React Hooks" preview="Intro to hooks" />);
  expect(screen.getByText(/January 1, 1970/i)).toBeInTheDocument();
});
