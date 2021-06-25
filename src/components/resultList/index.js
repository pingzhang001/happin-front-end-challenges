import React from "react";
import "./style.css";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function ResultList() {
  const [{ term, filterSuggestions, showSuggestions }, dispatch] =
    useStateValue();
  const onClick = (e) => {
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: e.target.innerText,
    });
    dispatch({
      type: actionTypes.RESET,
    });
  };
  const renderedHtml = () => {
    if (term.length < 3)
      return (
        <div className="no-suggestions">
          <em>Please enter more than 3 letters</em>
        </div>
      );
    if (filterSuggestions.length === 0 && showSuggestions)
      return (
        <div className="no-suggestions">
          <em>No result matches!</em>
        </div>
      );
    return (
      <ul className="suggestions">
        {filterSuggestions.map((suggestion, index) => {
          return (
            <li key={index} onClick={onClick}>
              {suggestion.title ? suggestion.title : suggestion}
            </li>
          );
        })}
      </ul>
    );
  };
  return <div>{renderedHtml()}</div>;
}

export default ResultList;
