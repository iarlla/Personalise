import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #00396d;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #00396d;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #818181;
`;

export const EditPhoto = styled.div`
  font-size: 14px;
  text-align: center;
`;

export const Info = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.span`
  font-size: 18px;
  color: #00396d;
`;

export const Value = styled.span`
  font-size: 18px;
  color: #818181;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #00396d;
  font-size: 18px;
`;
