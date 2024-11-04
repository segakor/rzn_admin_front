import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router";

export const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <Button type="text" icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
      Назад
    </Button>
  );
};
