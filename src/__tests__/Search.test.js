import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const { asFragment } = render(<Search />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a search bar", () => {
    render(<Search />);

    expect(screen.getByRole("textbox")).toHaveClass("search-input");
  });

  it("has a search button", () => {
    render(<Search />);

    expect(screen.getByRole("button")).toHaveClass("search-btn");
  });
});
