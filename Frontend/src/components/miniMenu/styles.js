import styled from "styled-components";

export const Nav = styled.nav`
  margin-left: 18px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  cursor: pointer;

  li {
    float: left;
  }

  li a {
    display: block;
    color: #b5b5b5;
    font-size: 16px;
    text-align: center;
    padding: 14px 3px;
    text-decoration: none;
  }
`;
