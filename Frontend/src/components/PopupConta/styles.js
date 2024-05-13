import styled from "styled-components";

export const PopupConta = styled.div`
  width: 810px;
  height: 472px;
  background-color: #ffffff;
  border: 1px solid #ccc;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #00396d;
  color: #ffffff;
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0;
`;

export const UserInfo = styled.div`
  padding: 20px;

  div {
    margin-bottom: 10px;
  }

  span {
    display: inline-block;
    width: 220px;
    color: #00396d;
  }

  p {
    display: inline-block;
    width: 220px;
    color: #818181;
  }
`;
