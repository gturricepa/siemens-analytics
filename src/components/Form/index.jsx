import React from "react";
import { Spin, notification } from "antd";
import * as Styled from "./styles";
import logo from "../../assets/siemens.png";
import { SendOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/userSlice";

export const Form = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const displayNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: "topLeft",
    });
  };

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const validUsername = import.meta.env.VITE_USERNAME;
    const validPassword = import.meta.env.VITE_PASSWORD;
    if (!username || !password) {
      setLoading(false);
      displayNotification(
        "warning",
        "Preencha todos os Campos.",
        "Por favor, verifique Usuário/Senha e tente novamente."
      );
      return;
    }
    if (username === validUsername && password === validPassword) {
      setLoading(false);
      navigate("/home");
      dispatch(logIn());
      return;
    }
    displayNotification(
      "error",
      "Verifique suas credenciais.",
      "Por favor, verifique Usuário/Senha e tente novamente."
    );
    setLoading(false);
    return;
  };
  return (
    <Styled.Holder>
      <Styled.Logo src={logo} alt="Logo" />
      <Styled.Name>CEPA ANALYTICS</Styled.Name>
      <Styled.Input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={handleInputChange(setUsername)}
      />
      <Styled.Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={handleInputChange(setPassword)}
      />

      <Styled.BtnLogin
        onClick={handleLogin}
        disabled={loading}
        loading={loading ? "true" : undefined}
      >
        {loading ? (
          <Spin size="small" />
        ) : (
          <SendOutlined style={{ fontSize: "20px" }} />
        )}
      </Styled.BtnLogin>
    </Styled.Holder>
  );
};
