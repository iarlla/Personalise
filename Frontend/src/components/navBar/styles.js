import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 50px;
  border-bottom: 1px solid themed("border");
  position: sticky;
  top: 0;
  background-color: #ffffff;
  color: themed("textColor");
  z-index: 999;
`;

export const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
