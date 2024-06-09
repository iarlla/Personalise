import * as C from "./styles";
import { Link } from "react-router-dom";

const MiniMenu = ({
  TitleOne,
  TitleTwo,
  TitleThree,
  TitleFour,
  TitleFive,
  symbolOne,
  symbolTwo,
  symbolThree,
  symbolFour,
  symbolFive,
  urlOne,
  urlTwo,
  urlThree,
  urlFour,
  urlFive,
}) => {
  return (
    <>
      <C.Nav>
        <C.Ul>
          <li>
            <Link to={urlOne}>
              {TitleOne} {symbolOne}
            </Link>
          </li>
          <li>
            <Link to={urlTwo}>
              {TitleTwo} {symbolTwo}
            </Link>
          </li>
          <li>
            <Link to={urlThree}>
              {TitleThree} {symbolThree}
            </Link>
          </li>
          <li>
            <Link to={urlFour}>
              {TitleFour} {symbolFour}
            </Link>
          </li>
          <li>
            <Link to={urlFive}>
              {TitleFive} {symbolFive}
            </Link>
          </li>
        </C.Ul>
      </C.Nav>
    </>
  );
};

export default MiniMenu;
