import styled from "styled-components";

export const titlePage = styled.h2`
  color: #00396d;
  font-size: 40px;
  margin-left: 20px;
`;

export const titleQuest = styled.h2`
  color: #00396d;
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

export const titleForm = styled.h2`
  color: #00396d;
  font-size: 27px;
  margin-top: 40px;
  margin-left: 40px;
  text-align: left;
  margin-bottom: 20px;
`;

export const line = styled.hr`
  color: #00396d;
  margin-left: 40px;
  margin-right: 40px;
  border: 2px solid;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const textoAbertura = styled.p`
  padding-top: 1%;
  margin-right: 30px;
  color: #797979;
`;

export const ContentQuest = styled.div`
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  padding: 20px;
  max-width: calc(100% - 60px);
  border-radius: 15px;
  color: white;
  width: 100%; /* Ocupa a largura total disponível */
`;

export const Container = styled.div`
  background-color: #e9e9e9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Button = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  opacity: 1;

  &:hover {
    background-color: #ce0303;
  }
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
  width: 400px; /* Ajuste a largura conforme necessário */
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
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6268;
  }
`;

export const ModalSaveButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ce0303;
  }
`;
