import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  padding: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 8px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #00396d;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #00396d;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilePicture = styled.div`
  width: 80px;
  height: 80px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #818181;
`;

export const EditPhoto = styled.div`
  font-size: 12px;
  text-align: center;
`;

export const Info = styled.div`
  width: 100%;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: #00396d;
`;

export const Value = styled.span`
  font-size: 14px;
  color: #818181;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #00396d;
  font-size: 14px;
`;
