import { useNavigate } from "react-router-dom";
import "./UserCard.css";

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <div className="user-card" onClick={() => navigate(`/users/${user.login}`)}>
      <img src={user.avatar_url} alt={user.login} />

      <div className="user-card-info">
        <p className="user-card-name">{user.login}</p>
        <p className="user-card-type">{user.type}</p>
      </div>

      <span className="user-card-arrow">→</span>
    </div>
  );
}

export default UserCard;
