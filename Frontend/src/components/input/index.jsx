import * as C from "./styles";

const Input = ({ type, placeholder, name, onChange }) => {
  return (
    <C.Input
      name={name}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
