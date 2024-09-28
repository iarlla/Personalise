import styled from "styled-components";

export const Content = styled.div`
  flex: 1; /* Faz com que o conteúdo ocupe todo o espaço disponível */
`;

export const Container = styled.div`
  background-color: #e9e9e9;
  min-height: 100vh; /* Garante que o container ocupe toda a altura da tela */
  display: flex;
  flex-direction: column;
`;

export const ContainerSejaBemvindo = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  color: #00396d;
`;

export const TextSejaBemvindo = styled.h1`
  font-size: 40px;
`;

export const MainContainer = styled.div`
  margin-left: 85px;
  margin-right: 5%;
  margin-top: -20px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

export const LabelTitle = styled.label`
  text-align: left;
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
  border-radius: 10px;
  width: 500px;
  max-height: 80vh; /* Limita a altura máxima do modal */
  display: flex;
  flex-direction: column; /* Para o footer ficar no fim */
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
  overflow-y: auto; /* Ativa a rolagem vertical */
  max-height: 60vh; /* Define uma altura máxima para o conteúdo */
`;

export const ModalFooter = styled.div`
  padding: 1rem;
  margin-top: 15px;
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
  background-color: #13ee08;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0dad04;
  }
`;

export const Button = styled.button`
  background-color: #00396d;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  opacity: 1;

  &:hover {
    background-color: #086dc9;
  }
`;

export const MainLeftContainer = styled.div`
  background-color: white;
  border-radius: 30px;
  color: white;
  font-size: 25px;
  margin-right: 35px;
  height: 725px;
  width: 645px;
`;

export const line = styled.hr`
  color: #00396d;
  margin-left: 40px;
  width: 96%;
  border: 2px solid;
`;

export const MainLeftTextoDiv = styled.div`
  background-color: #00396d;
  padding: 30px;
  padding-bottom: 70px;
  padding-top: 40px;
  border-radius: 30px 30px 60% 0%;
`;

export const ContainerButtons = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const MainLeftImg = styled.img`
  width: 105%;
  margin-top: 20px;
  margin-right: 50px;
`;

export const MainRightContainer = styled.div`
  background-color: white;
  width: 66%;
  border-radius: 30px;
  padding: 40px;
  justify-content: center;
  color: #00396d;
`;
