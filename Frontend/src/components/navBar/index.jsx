import * as C from "./styles.js";
import useAuth from "../../hooks/useAuth.jsx";
import { useState } from "react";
import PopupConta from "../PopupConta/index.jsx";

const Navbar = ({ Text }) => {
  const { currentUser } = useAuth();
  const [isPopupOpen, setIsPopUpOpen] = useState(false);

  const handleUserIconClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <C.Container>
      <img src="Logo.png" alt="logo" width="150px" />
      <C.ContainerPerfil>
        <img
          src="User.png"
          alt="logo"
          width="35px"
          onClick={handleUserIconClick}
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
            <b>Joao</b>
          </span>
          <p style={{ fontSize: "12px" }}>{Text}</p>
        </div>
      </C.ContainerPerfil>
      {isPopupOpen && <PopupConta onClose={handleClosePopup} />}
    </C.Container>
  );
};

export default Navbar;
