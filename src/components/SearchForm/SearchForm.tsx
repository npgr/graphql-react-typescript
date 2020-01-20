import React, { useState } from "react";
//import { Link } from 'semantic-ui-react'
import { Link } from "StyledComponents";
import { Input } from "./style";

const SearchForm: React.FC<{ theme?: object }> = ({ theme }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <>
      <Input
        data-test="searchInput"
        //label='Search'
        //size='big'
        icon="search"
        placeholder="Symbol or company name..."
        onChange={(val: React.FormEvent<HTMLInputElement>) =>
          setSearchValue(val.currentTarget.value)
        }
      />
      <Link left="10px">Advanced options</Link>
    </>
  );
};

export default SearchForm;
