import * as C from "./styles.js"; // Importe os estilos necessários

export const PopupConta = ({ onClose }) => {
  return (
    <C.PopupConta>
      <C.Header>
        <img src="Logo.png" alt="logo" width="30px" />
        <h2>Minha Conta</h2>
        <button onClick={onClose}>X</button>
      </C.Header>
      <C.Divider />
      <C.UserInfo>
        <div>
          <span>Nome:</span>
          <p>João</p>
        </div>
        <div>
          <span>Email:</span>
          <p>joao@example.com</p>
        </div>
        <div>
          <span>Matrícula:</span>
          <p>123456</p>
        </div>
      </C.UserInfo>
    </C.PopupConta>
  );
};

export default PopupConta;
