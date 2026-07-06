// src/Components/UserCard/UserCard.styles.js
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border: 1px solid #30363d;
  border-radius: 8px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease;

  &:hover {
    border-color: #58a6ff;
    background-color: #1c2128;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.p`
  color: #e6edf3;
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

export const Type = styled.p`
  color: #8b949e;
  font-size: 13px;
  margin: 2px 0 0;
`;

export const Arrow = styled.span`
  color: #8b949e;
  font-size: 18px;
`;
