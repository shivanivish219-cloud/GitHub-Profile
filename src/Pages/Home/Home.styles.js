// src/Pages/Home/Home.styles.js
import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Title = styled.h1`
  color: #a3e091;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
`;

export const SearchButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #238636;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2ea043;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;
