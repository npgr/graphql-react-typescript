import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Should render without errors", () => {
    //shallow(<App />);
    //const component = findByTestAtrr(wrapper, 'appComponent');
    //expect(component.length).toBe(1);
  });
});
