import { Menu as MenuAntd } from "antd";
import { useNavigate } from "react-router";
import { menuItems } from "../../constants/menuItems";

export const Menu = () => {
  const navigate = useNavigate();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickMenu = (e: any) => {
    navigate(`/main${e.key}`);
  };

  return (
    <MenuAntd
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
      items={menuItems}
      onClick={onClickMenu}
    />
  );
};
