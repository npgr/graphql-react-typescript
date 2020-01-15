import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import SearchForm from "./";
import { findByDataTest } from "utils/tests";

describe("SearchForm Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchForm />);
  });

  it("Should render without errors", () => {});

  it("Renders label City", () => {
    const cityLabel = <label>Location</label>;
    expect(wrapper.contains(cityLabel)).toBe(true);
    //expect(wrapper.contains(welcome)).toEqual(true);
  });

  it("Should have an input field", () => {
    const component = findByDataTest(wrapper, "searchInput");
    expect(component.length).toBe(1);
  });
});
