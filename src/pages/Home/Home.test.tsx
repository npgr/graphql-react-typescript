import React from "react";
import { shallow } from "enzyme";
import Home from "./";
import { findByDataTest } from "utils/tests";

describe("Home Page", () => {
  // @ts-ignore: wrapper type
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("Should render without errors", () => {});
  it("Should have an search form component", () => {
    // @ts-ignore: wrapper type
    const component = findByDataTest(wrapper, "searchFormComponent");
    expect(component.length).toBe(1);
  });
});
