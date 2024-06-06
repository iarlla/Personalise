import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
  max-width: 600px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: auto;
  margin-top: 20px; /* Adjusted margin for better alignment */
`;

export const Title = styled.h2`
  font-size: 35px;
  color: #00396d;
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const Info = styled.div`
  width: 100%;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #00396d;
`;

export const Value = styled.span`
  font-size: 14px;
  color: #818181;
  margin-top: 4px;
`;

export const ButtonSection = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 400px;
`;

export const ActionButton = styled.button`
  background-color: #00396d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  &:hover {
    background-color: #002244;
  }
`;

export const Image = styled.img`
  width: 45%;
  height: auto;
  object-fit: cover;
  align-self: center;
`;
