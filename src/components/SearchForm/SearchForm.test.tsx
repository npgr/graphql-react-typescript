import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import {
  existOneDataTestId,
  findByDataTestId,
  existAttributeWithValue,
} from 'test/utils'
import { SearchForm } from './'

// data-test Ids
const SEARCH_INPUT = 'searchInput'

// Tests
describe('SearchForm Component', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(<SearchForm />)
  })

  it('Should have an input field', () => {
    existOneDataTestId(wrapper, SEARCH_INPUT)
  })

  it('Input must have a placeholder with text "Symbol or company name..."', () => {
    const component = findByDataTestId(wrapper, SEARCH_INPUT)
    existAttributeWithValue(
      component,
      'placeholder',
      'Symbol or Company name...'
    )
  })
})
