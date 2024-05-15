import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-around;
  flex-direction: row;
  gap: 10px;
  padding-left: 50px;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  padding: 20px;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 950px;
  height: auto;
  margin-top: 50px;
  margin-left: 20px;
`;

export const LabelSignin = styled.label`
  font-size: 35px;
  font-family: Arial;
  color: #00396d;
  font-weight: 600;
  text-align: left;
  padding-bottom: 20px;
`;

export const LabelTitle = styled.label`
  text-align: left;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
  text-align: center;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
