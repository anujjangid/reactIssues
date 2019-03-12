import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Tags from "./index";

describe("Tags Components", () => {
  it("renders correctly without data", () => {
    const data = [];
    const tree = renderer
      .create(
        <BrowserRouter>
          <Tags data={data} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with data", () => {
    const data = [{ id: "Test", url: "test", color: "000" }];
    const tree = renderer
      .create(
        <BrowserRouter>
          <Tags data={data} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
