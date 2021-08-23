import { render, screen } from "@testing-library/react";
import App from "../../App";
import '@testing-library/jest-dom'

it("renders learn react link", async() => {
  render(<App title ="Enter" />);
  const headingElement = screen.getByText(/Enter/i);
  expect(headingElement).toBeInTheDocument();
});
