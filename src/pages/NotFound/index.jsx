import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Desculpe, a página que você está procurando não existe."
      extra={
        <Button
          style={{ backgroundColor: "#009999", borderColor: "#009999" }}
          onClick={() => navigate("/")}
          type="primary"
        >
          Voltar para a Home
        </Button>
      }
    />
  );
};
