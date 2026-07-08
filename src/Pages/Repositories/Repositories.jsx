// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./Repositories.css";
// import { getRepositories } from "../../Services/service";

// function Repositories() {
//   const { username } = useParams();
//   const [repos, setRepos] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function FetchUser() {
//       setLoading(true);

//       try {
//         const data = await getRepositories(username);
//         setRepos(data);
//       } catch (err) {
//         console.error(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     FetchUser();
//   }, [username]);

//   if (loading) return <p className="page-container">Loading....</p>;

//   return (
//     <div className="page-container">
//       <h2>@{username} - Repositories</h2>

//       <div className="repo-list">
//         {repos.map((repo) => (
//           <a
//             key={repo.id}
//             href={repo.html_url}
//             target="_blank"
//             rel="noreferrer"
//             className="repo-card"
//           >
//             <div className="repo-top">
//               <span className="repo-name">{repo.name}</span>
//               <span className="repo-stars">⭐ {repo.stargazers_count}</span>
//             </div>

//             {repo.description && (
//               <p className="repo-desc">{repo.description}</p>
//             )}

//             {repo.language && (
//               <span className="repo-lang">{repo.language}</span>
//             )}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Repositories;

import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getRepositories } from "../../Services/service";
import {
  PageContainer,
  PageTitle,
  SearchInput,
  RepoList,
  RepoCard,
  RepoTop,
  RepoName,
  RepoStars,
  RepoDesc,
  RepoLang,
} from "./Repositories.styles";

function Repositories() {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function FetchUser() {
      setLoading(true);

      try {
        const data = await getRepositories(username);
        setRepos(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    FetchUser();
  }, [username]);

  const FilteredRepos = useMemo(() => {
    return repos.filter((repo) =>
      repo.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [repos, search]);

  if (loading) return <PageContainer>Loading....</PageContainer>;

  return (
    <PageContainer>
      <PageTitle>@{username} - Repositories</PageTitle>

      <SearchInput
        type="text"
        placeholder="🔍 Search Repositories"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <RepoList>
        {FilteredRepos.map((repo) => (
          <RepoCard
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <RepoTop>
              <RepoName>{repo.name}</RepoName>
              <RepoStars>⭐ {repo.stargazers_count}</RepoStars>
            </RepoTop>

            {repo.description && <RepoDesc>{repo.description}</RepoDesc>}

            {repo.language && <RepoLang>{repo.language}</RepoLang>}
          </RepoCard>
        ))}
      </RepoList>
    </PageContainer>
  );
}

export default Repositories;
