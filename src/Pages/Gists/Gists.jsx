import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Repositories/Repositories.css";
import { getGists } from "../../Services/service";

function Gists() {
  const { username } = useParams();
  const [gists, setGists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function FetchUserGists() {
      setLoading(true);

      try {
        const response = await getGists(username);
        setGists(response);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    FetchUserGists();
  }, [username]);

  if (loading) return <p className="Page-status">Loading....</p>;

  return (
    <div className="page-container">
      <h2>@{username} — Gists</h2>

      <div className="repo-list">
        {gists.length === 0 && (
          <p style={{ color: "#8b949e" }}>No Gists found.</p>
        )}

        {gists.map((gist) => {
          const fileNames = Object.keys(gist.files || {});

          return (
            <a
              key={gist.id}
              href={gist.html_url}
              target="_blank"
              rel="noreferrer"
              className="repo-card"
            >
              <span>{fileNames[0] || "Untitled"}</span>

              {gist.description && (
                <p className="repo-desc">{gist.description}</p>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Gists;
