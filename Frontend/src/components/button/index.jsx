import * as C from "./styles";

const Button = ({ Type = "button", onClick, Text }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default Button;
