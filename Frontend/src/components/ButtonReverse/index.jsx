import * as C from "./styles";

const ButtonReverse = ({ Type = "button", onClick, Text }) => {
  return (
    <C.ButtonReverse type={Type} onClick={onClick}>
      {Text}
    </C.ButtonReverse>
  );
};

export default ButtonReverse;
