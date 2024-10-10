import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

export const MainPage = () => {
  const navigate = useNavigate();

  const goToNewsArt = () => {
    navigate(`/main/professionalam/novosti-art`);
  };

  const goToNewsRegion = () => {
    navigate(`/main/ty-s-mestnym/novosti-regiona`);
  };

  return (
    <div className="grid gap-5">
      <div className="text-lg">Админ панель ryazantourism.ru</div>
      <div className="grid gap-3">
        <div className="text-l">Быстрая навигация</div>
        <div>
          <Button
            type="primary"
            iconPosition="end"
            onClick={goToNewsRegion}
            icon={<LoginOutlined />}
          >
            Новости региона
          </Button>
        </div>
        <div>
          <Button
            type="primary"
            iconPosition="end"
            onClick={goToNewsArt}
            icon={<LoginOutlined />}
          >
            Новости АРТ
          </Button>
        </div>
      </div>
    </div>
  );
};
