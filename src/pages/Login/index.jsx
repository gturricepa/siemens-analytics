import * as Styled from "./styles";
import world from "../../assets/world.png";
import logo from "../../assets/logocepa.png";
import { Form } from "../../components/Form";
import React from "react";
export const Login = () => {
  React.useEffect(() => {
    document.title = "CEPA | SIEMENS - Login";
  }, []);
  return (
    <Styled.Holder2Lines>
      <Styled.HolderTwoColluns>
        <Styled.Left>
          <Form></Form>
        </Styled.Left>
        <Styled.Right>
          <Styled.Logo src={logo} alt="Logo" />
          <Styled.WorldImg src={world} alt="World" />
        </Styled.Right>
      </Styled.HolderTwoColluns>
    </Styled.Holder2Lines>
  );
};
