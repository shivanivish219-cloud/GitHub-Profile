// src/Pages/Repositories/Repositories.styles.js
import styled from "styled-components";

// Yeh "page-container" wala style hai (Repositories.css se).
// Followers.jsx aur Gists.jsx bhi isi className ko use kar rahe the,
// isliye yeh yahi se export hoga aur wahan se import kar lenge.
export const PageContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const PageTitle = styled.h2`
  color: #e6edf3;
  font-size: 20px;
  margin-bottom: 20px;
`;

// "page-status" wala style - Followers/Following/Gists sab isko reuse
// karte the (loading text)
export const PageStatus = styled.p`
  text-align: center;
  color: #8b949e;
  margin-top: 40px;
`;

export const RepoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RepoCard = styled.a`
  display: block;
  padding: 16px;
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: #58a6ff;
  }
`;

export const RepoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export const RepoName = styled.span`
  color: #58a6ff;
  font-size: 15px;
  font-weight: 600;
`;

export const RepoStars = styled.span`
  color: #8b949e;
  font-size: 13px;
`;

export const RepoDesc = styled.p`
  color: #8b949e;
  font-size: 13px;
  margin: 0 0 8px;
`;

export const RepoLang = styled.span`
  font-size: 12px;
  color: #e6edf3;
  background-color: #21262d;
  padding: 2px 8px;
  border-radius: 12px;
`;
