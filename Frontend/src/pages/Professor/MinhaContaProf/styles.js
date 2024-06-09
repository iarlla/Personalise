import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #e9e9e9;
  padding-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
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
  justify-content: end;
  margin-top: 65%;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background-color: #00396d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #002244;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 950px;
  height: auto;
  margin-top: 20px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  width: 400px;
`;

export const ModalHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h1`
  margin: 0;
  font-size: 1.25rem;
`;

export const ModalCloseButton = styled.button`
  border: none;
  background: none;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 1rem;
`;

export const ModalFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-end;
`;

export const ModalCancelButton = styled.button`
  background-color: #6c757d;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-right: 10px;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6268;
  }
`;

export const ModalSaveButton = styled.button`
  background-color: #28a745; /* Verde para botão de salvar */
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
`;