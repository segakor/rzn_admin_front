import type { FormProps } from "antd";
import { Button, Form, Input, Layout } from "antd";
import { useLogin } from "../../hooks";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

type FieldType = {
  userName: string;
  password: string;
};


export const LoginPage = () => {
  const { isPending, mutate } = useLogin();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    mutate(values);
  };

  return (
    <Layout className="flex min-h-full flex-col [background:radial-gradient(125%_125%_at_40%_10%,#dddcdc_40%,#63e_100%)] justify-center px-6 py-12 lg:px-8 h-screen">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-2xl bg-[#c4badf] p-10 shadow-2xl">
        <div className="flex items-center justify-center gap-3 mb-3 border-2 border-dashed p-2 rounded-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="none"
              viewBox="0 0 69 66"
            >
              <g clipPath="url(#a)">
                <path
                  fill="#B0EC4F"
                  stroke="#B0EC4F"
                  d="m20.242 50.89-.38-.445-.38.444-8.152 9.519C6.891 61.632 3.48 63.073.502 64.584c.026-3.862.266-7.064 1.419-10.528 6.56-6.723 13.978-7.884 19.424-7.884 5.84 0 12.156 1.276 18.535 2.566l.03.006c6.345 1.283 12.753 2.579 18.703 2.579 2.55 0 5.1-.244 7.704-.787 1.823 4.27 2.162 7.554 2.181 11.75-4.122.795-7.763 1.1-11.109 1.1-5.971 0-10.892-1.012-15.704-2.116-.483-.11-.966-.223-1.448-.334-4.253-.986-8.507-1.972-13.365-2.286l-6.631-7.76Zm31.012-19.238.002.002c4.85 4.263 9.77 9.1 12.968 14.701-1.522.253-3.38.399-5.48.399-5.216 0-11.033-1.16-17.078-2.366l-.495-.098c-6.198-1.235-12.613-2.483-18.732-2.483-7.244 0-12.75 1.907-17 4.743 3.229-5.356 7.83-10.15 13.795-15.551l.001-.002a757.818 757.818 0 0 1 4.167-3.772c3.128-2.818 5.41-4.873 6.997-6.616 1.119-1.228 1.92-2.329 2.438-3.464.523-1.142.748-2.294.748-3.612v-.194l-.131-.144-3.75-4.086L34.5.984l4.796 8.125-3.75 4.086-.131.144v.194c0 1.383.238 2.561.804 3.716.562 1.146 1.433 2.242 2.655 3.48 1.458 1.475 3.469 3.203 6.142 5.5a503.17 503.17 0 0 1 6.238 5.423Zm-31.395 33.58-3.79-4.384 3.79-4.438 3.73 4.438-3.73 4.384Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h69v66H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="font-medium text-xl">ryazantourism</div>
        </div>
        <div className="text-lg mb-3 text-center">Вход</div>
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="userName"
            rules={[
              { required: true, message: "Заполните обязательное поле" },
              {
                type: "email",
                message: "Некорректный email",
              },
            ]}
          >
            <Input placeholder="Email" prefix={<UserOutlined />} size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Заполните обязательное поле" }]}
          >
            <Input.Password
              placeholder="Пароль"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={isPending}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};
