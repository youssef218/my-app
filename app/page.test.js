import Home from "./page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
  it("contains a button with the text 'Reserve'", async () => {
    render(<Home />);
    const reserveButton = screen.getByText(/No events available now./);
    expect(reserveButton).toBeInTheDocument();
  });
});