import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Popover,
  Switch,
  Typography,
} from "antd";
import { TBanner } from "../../../api/banner";
import { fileDestination } from "../../../constants/constants";
import { ImageUploader } from "../../../components/ImageUploader";

type FieldType = TBanner;

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish: (values: any) => void;
  initialValue?: TBanner;
};

export const FormBanner = ({ onFinish, initialValue }: Props) => {
  const [form] = Form.useForm();

  const onChangeImageUploader = (e: number) => {
    form.setFieldValue("imageId", e);
  };

  return (
    <Form
      name="promturizm"
      onFinish={onFinish}
      layout="vertical"
      form={form}
      initialValues={initialValue}
    >
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Заголовок
          </Typography.Title>
        }
        name="title"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите заголовок" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Описание
          </Typography.Title>
        }
        name="subTitle"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите описание" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Порядок
          </Typography.Title>
        }
        name="sequence"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <InputNumber
          placeholder="Введите порядковый номер"
          size="large"
          min={0}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Ссылка{" "}
            <Popover
              content={
                <div className="grid gap-1">
                  <div>Для внешних ссылок - htpps://example.com</div>
                  <div>Для внутренних - /region/istoriya </div>
                </div>
              }
              title="Примеры:"
            >
              ⁉️
            </Popover>
          </Typography.Title>
        }
        name="linkPath"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите ссылку" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Активен
          </Typography.Title>
        }
        name="isActive"
      >
        <Switch />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Изображение
          </Typography.Title>
        }
        name="imageId"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <ImageUploader
          onChange={onChangeImageUploader}
          destination={fileDestination.BANNER}
          initialPath={initialValue?.storage_image?.imagePath}
        />
      </Form.Item>
      <Form.Item<FieldType> name="id">
        <Input hidden />
      </Form.Item>
      <Divider className="mt-7 mb-7" />
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};
