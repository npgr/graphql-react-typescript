import React from "react";
import { shallow } from "enzyme";
import SearchForm from "./";
import { findByDataTest } from "utils/tests";

describe("SearchForm Component", () => {
  // @ts-ignore: wrapper type
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchForm />);
  });

  it("Should render without errors", () => {});
  it("Should have an input field", () => {
    //  @ts-ignore: wrapper type
    const component = findByDataTest(wrapper, "searchInput");
    expect(component.length).toBe(1);
  });
});
