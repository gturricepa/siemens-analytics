import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import { logOut } from "../../store/userSlice";
import { useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
export const Header = ({ onSelect }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleClick = () => {
    dispatch(logOut());
    nav("/");
  };

  const handleSelect = (component) => {
    onSelect(component);
  };

  return (
    <Styled.Header>
      <Styled.Selector>
        <ul>
          <li onClick={() => handleSelect("general")}>Resultados Gerais</li>
          <li onClick={() => handleSelect("users")}>BTW Teóricos</li>
          <li onClick={() => handleSelect("practical")}>BTW Leves Práticos</li>
          {/* <li onClick={() => handleSelect("notes")}>Observações</li> */}
        </ul>
      </Styled.Selector>
      <Styled.LogOut>
        Bem vindo.
        <LogoutOutlined onClick={handleClick} />
      </Styled.LogOut>
    </Styled.Header>
  );
};
