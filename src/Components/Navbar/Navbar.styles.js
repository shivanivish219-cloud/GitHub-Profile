import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 60px;
  background-color: #0d1117;
  border-bottom: 1px solid #30363d;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 6px 14px;
  border-radius: 6px;
  color: #8b949e;
  text-decoration: none;

  &.active {
    color: white;
    background-color: #21262d;
  }

  &:hover {
    background-color: #161b22;
    color: #e6edf3;
  }
`;

/* ⭐ IMPORTANT: Theme button */
export const ThemeButton = styled.button`
  background: transparent;
  border: 1px solid #30363d;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px;

  transition: all 0.2s ease;

  &:hover {
    background: #161b22;
  }
`;

export const Main = styled.main`
  padding: 24px 32px;
  min-height: calc(100vh - 60px);
`;
