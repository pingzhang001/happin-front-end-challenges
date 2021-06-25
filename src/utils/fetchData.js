import { cities, books } from "../data/dataset";
export const fetchData = (searchType, term) => {
  switch (searchType) {
    case "cities":
      return cities.filter((city) =>
        city.toLowerCase().includes(term.toLowerCase())
      );
    default:
      return books.filter((book) =>
        book.title.toLowerCase().includes(term.toLowerCase())
      );
  }
};
