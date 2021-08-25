import { render, screen } from "@testing-library/react";
import App from "../../App";
import "@testing-library/jest-dom";

// it("testin the text that come from the label from App.js", async () => {
//   render(<App title="Enter" />);
//   const headingElement = screen.getByText(/Enter/i);
//   expect(headingElement).toBeInTheDocument();
// });

// it("testin the button from App.js", async () => {
//   render(<App title="button" />);
//   const headingElement = screen.getByRole("button");
//   expect(headingElement).toBeInTheDocument();
// });

it("testin the title label from App.js", async () => {
  render(<App title="label" />);
  const headingElement = screen.getByTitle("label");
  expect(headingElement).toBeInTheDocument();
});

it("testing the the main div from App.js", async () => {
  render(<App title="wrap-div" />);
  const headingElement = screen.getByTestId("wrap-div");
  expect(headingElement).toBeInTheDocument();
});

//Find by text:

// it("Find by text : testin the text that come from the label from App.js", async () => {
//   render(<App title="Enter" />);
//   const headingElement = await screen.findByText(/Enter/i);
//   expect(headingElement).toBeInTheDocument();
//   const test = /Enter/i;
//   console.log(typeof test);
// });

//QueryBy

// it("Find QueryBy", async () => {
//   render(<App title="Enter" />);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// getAllByRole:

it("getAllByRole", async () => {
  render(<App title="button" />);
  const headingElements = screen.getAllByRole("button");
  expect(headingElements.length).toBe(1);
});
