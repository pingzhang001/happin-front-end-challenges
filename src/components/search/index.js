import React, { useRef, useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import "./style.css";

function Search({ searchType }) {
  const [{ term }, dispatch] = useStateValue();
  const inputEl = useRef(null);

  const onInputChange = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: e.target.value,
    });

    dispatch({
      type: actionTypes.SET_SHOW_SUGGESTIONS,
      showSuggestions: e.target.value.length >= 3,
    });
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        placeholder={`Search ${searchType}`}
        onChange={onInputChange}
        value={term}
      />
    </div>
  );
}

export default Search;
