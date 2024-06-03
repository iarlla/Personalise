import * as C from "./styles.js";
import useAuth from "../../hooks/useAuth.jsx";

const Navbar = ({ Text }) => {
  const { currentUser } = useAuth();
  return (
    <C.Container>
      <img
        src={`${window.location.origin}/Logo.png`}
        alt="logo"
        width="150px"
        style={{ maxHeight: "100%" }} // Ajustar a altura máxima da imagem
      />
      <C.ContainerPerfil>
        <img
          src={`${window.location.origin}/User.png`}
          alt="user"
          width="35px"
          style={{ maxHeight: "100%" }} // Ajustar a altura máxima da imagem
        />
        <div
          style={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            marginLeft: "15px",
          }}
        >
          <span>
<<<<<<< HEAD
            <b>iarla</b>
=======
            <b>{currentUser.id}</b>
>>>>>>> main
          </span>
          <p style={{ fontSize: "12px" }}>{Text}</p>
        </div>
      </C.ContainerPerfil>
    </C.Container>
  );
};

export default Navbar;
