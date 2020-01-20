import React, { useState, useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'StyledComponents'
import { Input } from './style'

const SearchForm: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  useEffect(() => {
    // Component did mount and unmount
    console.log('call on load component')
    return () => console.log('leave component')
  }, [])
  useEffect(() => console.log('input change:', searchValue), [searchValue])

  return (
    <>
      <Input
        data-test="searchInput"
        //label='Search'
        //size='big'
        icon={<Icon name="search" link onClick={() => alert(searchValue)} />}
        placeholder="Symbol or Company name..."
        onChange={(val: React.FormEvent<HTMLInputElement>) =>
          setSearchValue(val.currentTarget.value)
        }
      />
      <Link left="10px">Advanced options</Link>
    </>
  )
}

export default SearchForm
