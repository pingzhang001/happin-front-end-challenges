export const initialState = {
  term: "",
  filterSuggestions: [],
  showSuggestions: false,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_FILTER_SUGGESTIONS: "SET_FILTER_SUGGESTIONS",
  SET_SHOW_SUGGESTIONS: "SET_SHOW_SUGGESTIONS",
  RESET: "RESET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    case actionTypes.SET_FILTER_SUGGESTIONS:
      return {
        ...state,
        filterSuggestions: action.filterSuggestions,
      };
    case actionTypes.SET_SHOW_SUGGESTIONS:
      return {
        ...state,
        showSuggestions: action.showSuggestions,
      };
    case actionTypes.RESET:
      return {
        ...state,
        showSuggestions: false,
        filterSuggestions: [],
      };
    default:
      return state;
  }
};

export default reducer;
