import { EditOutlined, ToolOutlined } from "@ant-design/icons";
import * as Styled from "./styles";
import React from "react";

export const Notes = () => {
  React.useEffect(() => {
    document.title = "CEPA | SIEMENS - Observações";
  }, []);
  return (
    <Styled.Holder>
      <h2>
        <EditOutlined /> Histórico de Updates (GOVERNANÇA)
      </h2>
      <code>
        {" "}
        <ToolOutlined />
        11/09/2024: As datas de realização de treinamento foram substituídas
        pelas datas de realização dos treinamentos teóricos;
      </code>
      <code>
        <ToolOutlined />
        12/09/2024: Implementação da página BTW teóricos, onde estão todos os
        condutores que realizaram os treinamentos Webinars;
      </code>

      <code>
        <ToolOutlined />
        12/09/2024: Retirado o nome (Versão Tables) dos labels de treinamentos;
      </code>
    </Styled.Holder>
  );
};
