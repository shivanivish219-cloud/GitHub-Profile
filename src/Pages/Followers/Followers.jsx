// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getFollowers } from "../../Services/service";
// // import axios from "axios";
// import "./Followers.css";

// function Followers() {
//   const { username } = useParams();
//   const [followers, setFollowers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchUserFollower() {
//       setLoading(true);

//       try {
//         const data = await getFollowers(username);
//         // `https://api.github.com/users/${username}`,

//         setFollowers(data);
//       } catch (err) {
//         console.error(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchUserFollower();
//   }, [username]);

//   if (loading) return <p className="page-status">loading...</p>;

//   return (
//     <div className="page-container">
//       <h2>@{username} - Follower</h2>
//       <div className="user-grid">
//         {followers.map((f) => (
//           <div
//             key={f.id}
//             className="user-grid-card"
//             onClick={() => navigate(`/users/${f.login}`)}
//           >
//             <img src={f.avatar_url} alt={f.login} />
//             <span>{f.login}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Followers;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFollowers } from "../../Services/service";
import { UserGrid, UserGridCard } from "./Followers.styles";
// page-container/page-status Repositories.css mein define the, aur CSS
// global hone ki wajah se Followers.jsx mein bhi automatically apply ho
// jaate the. Styled-components scoped hote hain, isliye ab yahan se
// explicitly import karna padega.
import {
  PageContainer,
  PageTitle,
  PageStatus,
} from "../Repositories/Repositories.styles";

function Followers() {
  const { username } = useParams();
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserFollower() {
      setLoading(true);

      try {
        const data = await getFollowers(username);
        setFollowers(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUserFollower();
  }, [username]);

  if (loading) return <PageStatus>loading...</PageStatus>;

  return (
    <PageContainer>
      <PageTitle>@{username} - Follower</PageTitle>
      <UserGrid>
        {followers.map((f) => (
          <UserGridCard
            key={f.id}
            onClick={() => navigate(`/users/${f.login}`)}
          >
            <img src={f.avatar_url} alt={f.login} />
            <span>{f.login}</span>
          </UserGridCard>
        ))}
      </UserGrid>
    </PageContainer>
  );
}

export default Followers;
