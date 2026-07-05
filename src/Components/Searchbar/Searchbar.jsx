// src/Components/Searchbar/Searchbar.jsx
import { useEffect, useState } from "react";
import UserCard from "../Components/Usercard/Usercard";
import axios from "axios";
import "./Searchbar.css";

function Searchbar() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch() {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    setUsers([]);

    // useEffect(() => {
    //   async function fetchUser() {
    //     setLoading(true);

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&per_page=12`,
      );

      // if (!res.ok) throw new Error("GitHub API error");
      //   const data = await res.json();
      setUsers(response.data.items);
    } catch (err) {
      setError("Try again.");
    } finally {
      setLoading(false);
    }
  }
  //   fetchUser();
  // }, [setUsers]);

  //     }
  //   }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-input-row">
        <input
          type="text"
          placeholder="GitHub username search karo..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p className="search-error">{error}</p>}

      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {!loading && users.length === 0 && query && !error && (
        <p className="search-empty">No user Found</p>
      )}
    </div>
  );
}

export default Searchbar;
