import React, { useState } from "react";

const SearchForm: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const sendValue = () => console.log("sending", location);
  return (
    <>
      <label>Location</label>
      <input
        data-test="searchInput"
        type="text"
        onBlur={e => setLocation(e.target.value)}
        defaultValue=""
      />
      <button onClick={sendValue}>Go</button>
    </>
  );
};

export default SearchForm;
