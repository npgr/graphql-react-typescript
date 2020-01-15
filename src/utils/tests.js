import { EnzymeAdapter } from "enzyme";

export const findByDataTest = (component, dataTestId) => {
  const wrapper = component.find(`[data-test='${dataTestId}']`);
  return wrapper;
};
