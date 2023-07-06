import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SidebarDiv = styled.nav`
  background: #12666c;
  width: 30vh;
  height: 88vh;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 15;
  transition: 350ms;
  z-index: 0;
  border: 5px solid black;
  border-top: 0;
  list-style-type: none;
  list-style: none;
`;

export const SidebarWrap = styled.div`
  width: 100%;
  list-style-type: none;
  list-style: none;
  text-transform: ;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  list-style-type: none;
  list-style: none;
  height: 5px;
  font-size: 18px;
  cursor: pointer;
  &.active {
    color: #1aafff;
  }
  &:hover {
      background: #252831;
      border-left: 4px solid #632ce4;
      cursor: pointer;
    }
  `;