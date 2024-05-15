import * as C from "./styles";

const ButtonPrincipal = ({ Type = "button", onClick, Text }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default ButtonPrincipal;
