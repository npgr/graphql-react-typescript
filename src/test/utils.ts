import { ShallowWrapper } from "enzyme";

export const findByDataTestId = (wrapper: ShallowWrapper, dataTestId: string) =>
  wrapper.find(`[data-test='${dataTestId}']`);

export const existAttributeWithValue = (
  wrapper: ShallowWrapper,
  attribute: string,
  value: string
) => {
  const component = wrapper.find(`[${attribute}='${value}']`);
  expect(component.length).toBe(1);
};

export const existOneDataTestId = (
  wrapper: ShallowWrapper,
  dataTestId: string
) => {
  const component = findByDataTestId(wrapper, dataTestId);
  expect(component.length).toBe(1);
};
