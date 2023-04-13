import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = ["image1", "image2", "image3", "image4"];
  const { asFragment } = render(<SearchResults results={validProps} />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it("returns images", () => {
    render(<SearchResults results={validProps} />);

    expect(screen.getAllByRole("img")).toHaveLength(4);
  });
});
