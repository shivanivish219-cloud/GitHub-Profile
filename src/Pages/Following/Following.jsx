import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Followers/Followers.css"; // same CSS reuse
import { getFollowing } from "../../Services/service";

function Following() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserFollowing() {
      setLoading(true);

      try {
        const data = await getFollowing(username);
        // `https://api.github.com/users/${username}/following?per_page=24`,

        setFollowing(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUserFollowing();
  }, [username]);

  if (loading) return <p className="page-status">Loading...</p>;

  return (
    <div className="page-container">
      <h2>@{username} — Following</h2>
      <div className="user-grid">
        {following.map((f) => (
          <div
            key={f.id}
            className="user-grid-card"
            onClick={() => navigate(`/users/${f.login}`)}
          >
            <img src={f.avatar_url} alt={f.login} />
            <span>{f.login}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Following;
