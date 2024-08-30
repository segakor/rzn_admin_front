import { Avatar, Button, Layout, theme, Tooltip } from "antd";
import { Menu } from "../../components/Menu";
import { Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import { ReactNode } from "react";
import { useLogout } from "../../hooks";

const { Content, Sider } = Layout;

export const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { logount } = useLogout();

  return (
    <Layout className="min-h-screen">
      <Header className="flex justify-between items-center mb-4">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="none" viewBox="0 0 69 66"><g clip-path="url(#a)"><path fill="#B0EC4F" stroke="#B0EC4F" d="m20.242 50.89-.38-.445-.38.444-8.152 9.519C6.891 61.632 3.48 63.073.502 64.584c.026-3.862.266-7.064 1.419-10.528 6.56-6.723 13.978-7.884 19.424-7.884 5.84 0 12.156 1.276 18.535 2.566l.03.006c6.345 1.283 12.753 2.579 18.703 2.579 2.55 0 5.1-.244 7.704-.787 1.823 4.27 2.162 7.554 2.181 11.75-4.122.795-7.763 1.1-11.109 1.1-5.971 0-10.892-1.012-15.704-2.116-.483-.11-.966-.223-1.448-.334-4.253-.986-8.507-1.972-13.365-2.286l-6.631-7.76Zm31.012-19.238.002.002c4.85 4.263 9.77 9.1 12.968 14.701-1.522.253-3.38.399-5.48.399-5.216 0-11.033-1.16-17.078-2.366l-.495-.098c-6.198-1.235-12.613-2.483-18.732-2.483-7.244 0-12.75 1.907-17 4.743 3.229-5.356 7.83-10.15 13.795-15.551l.001-.002a757.818 757.818 0 0 1 4.167-3.772c3.128-2.818 5.41-4.873 6.997-6.616 1.119-1.228 1.92-2.329 2.438-3.464.523-1.142.748-2.294.748-3.612v-.194l-.131-.144-3.75-4.086L34.5.984l4.796 8.125-3.75 4.086-.131.144v.194c0 1.383.238 2.561.804 3.716.562 1.146 1.433 2.242 2.655 3.48 1.458 1.475 3.469 3.203 6.142 5.5a503.17 503.17 0 0 1 6.238 5.423Zm-31.395 33.58-3.79-4.384 3.79-4.438 3.73 4.438-3.73 4.384Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h69v66H0z"/></clipPath></defs></svg>
        </div>
        <Tooltip
          className="cursor-pointer"
          title={
            <Button type="text" onClick={logount}>
              Выйти
            </Button>
          }
          color="#ffff"
          placement="bottom"
        >
          <Avatar size={46} icon={<UserOutlined />} />
        </Tooltip>
      </Header>
      <Layout>
        <Sider width={250} style={{ background: colorBgContainer }}>
          <Menu />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
