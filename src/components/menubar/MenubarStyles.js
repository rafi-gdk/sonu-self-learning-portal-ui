import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenubarDiv = styled.div`
background: #12666c;
height: 75px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.2rem
z-index: 12;
border: 5px solid black;
`;

export const MenuDiv = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
white-space: nowrap;
list-style: none;
list-style-type: none;
@media screen and (max-width: 768px) {
	display: none;
}
`;


export const MenubarLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 1rem;
height: 100%;
cursor: pointer;
font-weight: bold;
font-size: 18px;
&.active {
	color: #1aafff;
}
&:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const MenubarBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const MenubarBtnLink = styled(Link)`
border-radius: 4px;
background: #fff;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
font-weight: bold;
&:hover {
	color: #fff;
}
`;
