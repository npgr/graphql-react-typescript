import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { SearchForm } from "./";
import { existOneDataTestId } from "test/utils";

describe("SearchForm Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchForm />);
  });

  it("Renders label City", () => {
    const cityLabel = <label>Location</label>;
    expect(wrapper.contains(cityLabel)).toBe(true);
    //expect(wrapper.contains(welcome)).toEqual(true);
  });

  it("Should have an input field", () => {
    existOneDataTestId(wrapper, "searchInput");
  });
});
