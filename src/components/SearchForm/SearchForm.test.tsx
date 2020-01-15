import React from "react";
import { shallow } from "enzyme";
import SearchForm from "./";
import { findByDataTest } from "utils/tests";

describe("SearchForm Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchForm />);
  });

  it("Should render without errors", () => {});
  it("Should have an input field", () => {
    const component = findByDataTest(wrapper, "searchInput");
    expect(component.length).toBe(1);
  });
});
