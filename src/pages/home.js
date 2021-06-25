import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import Search from "../components/search";
import ResultList from "../components/resultList";
import { fetchData } from "../utils/fetchData";

export default function Home({ searchType }) {
  const [{ term, showSuggestions }, dispatch] = useStateValue();

  useEffect(() => {
    let result = showSuggestions ? fetchData(searchType, term) : [];
    dispatch({
      type: actionTypes.SET_FILTER_SUGGESTIONS,
      filterSuggestions: result,
    });
  }, [term]);
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <Search searchType={searchType} />
      <ResultList />
    </div>
  );
}
