import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
import { getUserProfile } from "../../Services/service";
import "./UserProfile.css";

function UserProfile() {
  const { username } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);

      try {
        const data = await getUserProfile(username);

        // `https://api.github.com/users/${username}`,

        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  if (loading) return <p className="profile-status">Loading...</p>;
  if (error) return <p className="profile-status profile-error">{error}</p>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.avatar_url} alt={user.login} />

        <div>
          <h1>{user.name || user.login}</h1>

          <p className="profile-username">@{user.login}</p>

          {user.bio && <p className="profile-bio">{user.bio}</p>}
        </div>
      </div>

      <div className="profile-stats">
        <div
          className="stat"
          onClick={() => navigate(`/users/${user.login}/repos`)}
        >
          <span className="stat-value">{user.public_repos}</span>
          <span className="stat-label">Repos</span>
        </div>

        <div
          className="stat"
          onClick={() => navigate(`/users/${user.login}/gists`)}
        >
          <span className="stat-value">{user.public_gists}</span>
          <span className="stat-label">Gists</span>
        </div>

        <div
          className="stat"
          onClick={() => navigate(`/users/${user.login}/followers`)}
        >
          <span className="stat-value">{user.followers}</span>
          <span className="stat-label">Followers</span>
        </div>

        <div
          className="stat"
          onClick={() => navigate(`/users/${user.login}/following`)}
        >
          <span className="stat-value">{user.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      {user.location && <p className="profile-location">📍 {user.location}</p>}

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="profile-github-link"
      >
        GitHub
      </a>
    </div>
  );
}

export default UserProfile;
