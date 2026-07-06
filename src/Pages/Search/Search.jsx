// // src/Pages/Search/Search.jsx
// import Searchbar from "../../Components/Searchbar/Searchbar";
// import "./Search.css";

// function Search() {
//   return (
//     <div className="search-page">
//       <h2>Search GitHub Users</h2>
//       <Searchbar />
//     </div>
//   );
// }

// export default Search;

// src/Pages/Search/Search.jsx
import Searchbar from "../../Components/Searchbar/Searchbar";
import { SearchPage, SearchTitle } from "./Search.styles";

function Search() {
  return (
    <SearchPage>
      <SearchTitle>Search GitHub Users</SearchTitle>
      <Searchbar />
    </SearchPage>
  );
}

export default Search;
