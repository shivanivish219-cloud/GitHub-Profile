// src/Pages/Followers/Followers.styles.js
import styled from "styled-components";

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
`;

export const UserGridCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.15s ease;
  text-align: center;

  &:hover {
    border-color: #58a6ff;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  span {
    color: #e6edf3;
    font-size: 13px;
    word-break: break-all;
  }
`;
