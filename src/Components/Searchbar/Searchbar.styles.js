// src/Components/Searchbar/Searchbar.styles.js
import styled from "styled-components";

export const SearchbarWrapper = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

export const SearchbarInputRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  color: #e6edf3;
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: #58a6ff;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #238636;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background-color: #2ea043;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SearchError = styled.p`
  color: #f85149;
  font-size: 14px;
`;

export const SearchEmpty = styled.p`
  color: #8b949e;
  font-size: 14px;
`;
