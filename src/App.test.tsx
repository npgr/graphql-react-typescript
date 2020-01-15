import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";

describe("App Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Should render without errors", () => {
    //const wrapper = render(<App />)
    console.log("wrapper=", wrapper);
    expect(wrapper);
  });
});
