import { useState, useEffect } from "react";
import * as C from "./styles";
import Navbar from "../../../components/navBar";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MinhaContaProf = () => {
  const [user, setUser] = useState({ nome: "", email: "", matricula: "" });
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPasswordError("");
  };
  const handleShowPasswordModal = () => setShowPasswordModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchDataUser = async () => {
      if (currentUser && currentUser.id) {
        try {
          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/users/usuario/${currentUser.id}`
          );
          if (res.data && res.data.length > 0) {
            setUser(res.data[0]);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No current user ID available.");
      }
    };

    fetchDataUser();
  }, [currentUser]);

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    setShowEditModal(false);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/users/usuario/editar/${
          currentUser.id
        }`,
        {
          nome: user.nome,
          email: user.email,
        }
      );
      console.log("User data saved successfully");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const handleSavePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setPasswordError("A nova senha e a confirmação da senha não coincidem.");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/users/usuario/alterar-senha/${
          currentUser.id
        }`,
        {
          oldSenha: oldPassword,
          senha: newPassword,
          confirmSenha: confirmPassword,
        }
      );
      setShowPasswordModal(false);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setPasswordError("");
      console.log("Senha alterada com sucesso");
    } catch (error) {
      console.error("Error changing password:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setPasswordError(error.response.data.message);
      } else {
        setPasswordError("Erro ao alterar a senha.");
      }
    }
  };

  return (
    <>
      <Navbar Text="Professor" />
      <C.Container>
        <C.Content>
          <C.Title>Minha conta</C.Title>
          <C.Info>
            <C.InfoItem>
              <C.Label>Nome completo</C.Label>
              <C.Value>{user.nome}</C.Value>
            </C.InfoItem>
            <C.InfoItem>
              <C.Label>Email</C.Label>
              <C.Value>{user.email}</C.Value>
            </C.InfoItem>
            <C.InfoItem>
              <C.Label>Matricula</C.Label>
              <C.Value>{user.matricula}</C.Value>
            </C.InfoItem>
            <C.ButtonSection>
              <C.ActionButton
                onClick={() => [logout(), navigate("/")]}
                style={{ marginRight: "300px", backgroundColor: "red" }}
              >
                Sair
              </C.ActionButton>
              <C.ActionButton onClick={handleShowPasswordModal}>
                Alterar senha
              </C.ActionButton>
              <C.ActionButton onClick={handleShowEditModal}>
                Editar dados
              </C.ActionButton>
            </C.ButtonSection>
          </C.Info>
        </C.Content>
        <C.Image src="rafikii.png" alt="Descrição da imagem" />
      </C.Container>

      {showEditModal && (
        <C.ModalOverlay onClick={handleCloseEditModal}>
          <C.ModalContent onClick={(e) => e.stopPropagation()}>
            <C.ModalHeader>
              <C.ModalTitle>Editar Dados</C.ModalTitle>
              <C.ModalCloseButton onClick={handleCloseEditModal}>
                &times;
              </C.ModalCloseButton>
            </C.ModalHeader>
            <C.ModalBody>
              <form onSubmit={handleSaveEdit}>
                <C.FormGroup>
                  <C.Label htmlFor="editName">Nome completo</C.Label>
                  <C.Input
                    type="text"
                    id="editName"
                    name="nome"
                    value={user.nome}
                    onChange={handleChange}
                  />
                </C.FormGroup>
                <C.FormGroup>
                  <C.Label htmlFor="editEmail">Email</C.Label>
                  <C.Input
                    type="email"
                    id="editEmail"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </C.FormGroup>
                <C.ModalFooter>
                  <C.ModalCancelButton onClick={handleCloseEditModal}>
                    Cancelar
                  </C.ModalCancelButton>
                  <C.ModalSaveButton type="submit">Salvar</C.ModalSaveButton>
                </C.ModalFooter>
              </form>
            </C.ModalBody>
          </C.ModalContent>
        </C.ModalOverlay>
      )}

      {showPasswordModal && (
        <C.ModalOverlay onClick={handleClosePasswordModal}>
          <C.ModalContent onClick={(e) => e.stopPropagation()}>
            <C.ModalHeader>
              <C.ModalTitle>Alterar Senha</C.ModalTitle>
              <C.ModalCloseButton onClick={handleClosePasswordModal}>
                &times;
              </C.ModalCloseButton>
            </C.ModalHeader>
            <C.ModalBody>
              <form onSubmit={handleSavePassword}>
                <C.FormGroup>
                  <C.Label htmlFor="oldPassword">Senha Antiga</C.Label>
                  <C.Input
                    type="password"
                    id="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
                </C.FormGroup>
                <C.FormGroup>
                  <C.Label htmlFor="newPassword">Nova Senha</C.Label>
                  <C.Input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </C.FormGroup>
                <C.FormGroup>
                  <C.Label htmlFor="confirmPassword">Confirmar Senha</C.Label>
                  <C.Input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </C.FormGroup>
                {passwordError && (
                  <C.ErrorMessage>{passwordError}</C.ErrorMessage>
                )}
                <C.ModalFooter>
                  <C.ModalCancelButton onClick={handleClosePasswordModal}>
                    Cancelar
                  </C.ModalCancelButton>
                  <C.ModalSaveButton type="submit">Salvar</C.ModalSaveButton>
                </C.ModalFooter>
              </form>
            </C.ModalBody>
          </C.ModalContent>
        </C.ModalOverlay>
      )}
    </>
  );
};

export default MinhaContaProf;