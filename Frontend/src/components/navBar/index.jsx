import * as C from "./styles.js";
import useAuth from "../../hooks/useAuth.jsx";

const Navbar = ({ Text }) => {
  const { currentUser } = useAuth();
  return (
    <C.Container>
      <img src="Logo.png" alt="logo" width="150px" />
      <C.ContainerPerfil>
        <img src="User.png" alt="logo" width="35px" />
        <div
          style={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            marginLeft: "15px",
          }}
        >
          <span>
            <b>{currentUser.nome}</b>
          </span>
          <p style={{ fontSize: "12px" }}>{Text}</p>
        </div>
      </C.ContainerPerfil>
    </C.Container>
  );
};

export default Navbar;
