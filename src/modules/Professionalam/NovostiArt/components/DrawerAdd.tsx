import {
  Button,
  Divider,
  Drawer,
  Form,
  FormProps,
  Input,
  Typography,
} from "antd";
import Editor from "../../../../components/Editor";
import { ImageUploader } from "../../../../components/ImageUploader";

type Props = {
  onClose: () => void;
  open: boolean;
};

type FieldType = {
  title: string;
  bodyText: string;
  imagePath: string;
};

export const DrawerAdd = ({ onClose, open }: Props) => {
  
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
  };

  const [form] = Form.useForm();

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  const onChangeImageUploader = (e: string) => {
    form.setFieldValue("imagePath", e);
  };

  return (
    <Drawer
      title="Добавить новость АРТ"
      onClose={onClose}
      open={open}
      size={"large"}
    >
      <Form
        name="newsArt"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label={
            <Typography.Title className="!m-0" level={5}>
              Заголовок новости
            </Typography.Title>
          }
          name="title"
          rules={[{ required: true, message: "Заполните обязательное поле" }]}
        >
          <Input placeholder="Заголовок новости" size="large" />
        </Form.Item>
        <Form.Item<FieldType>
          label={
            <Typography.Title className="!m-0" level={5}>
              Описание
            </Typography.Title>
          }
          name="bodyText"
          rules={[{ required: true, message: "Заполните обязательное поле" }]}
        >
          <Editor initData="" onChange={onChangeEditor} />
        </Form.Item>
        <Form.Item
          label={
            <Typography.Title className="!m-0" level={5}>
              Изображение
            </Typography.Title>
          }
          name={"imagePath"}
          rules={[{ required: true, message: "Заполните обязательное поле" }]}
        >
          <Input placeholder="" size="large" hidden />
          <ImageUploader onChange={onChangeImageUploader} destination="novosti-art"/>
        </Form.Item>
        <Divider className="mt-7 mb-7" />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            /* block */
            size="large"
          >
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
