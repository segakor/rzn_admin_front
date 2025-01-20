import { Button, Divider, Form, Input, Switch, Typography } from "antd";
import {
  fileDestination,
} from "../../../../constants/constants";
import { ImageUploader } from "../../../../components/ImageUploader";
import { TCreateGid, TGid } from "../../../../api/gid";

type FieldType = TCreateGid & {
  id: string;
};

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish: (values: any) => void;
  initialValue?: TGid;
};

export const FormGid = ({ onFinish, initialValue }: Props) => {
  const [form] = Form.useForm();

  const onChangeImageUploader = (e: number) => {
    form.setFieldValue("imageId", e);
  };

  return (
    <Form
      name="gid"
      onFinish={onFinish}
      layout="vertical"
      form={form}
      initialValues={initialValue}
    >
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            ФИО
          </Typography.Title>
        }
        name="fio"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите фио" size="large" />
      </Form.Item>
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
        name="bodyText"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите описание" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Телефон
          </Typography.Title>
        }
        name="phone"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите телефон" size="large" />
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
          destination={fileDestination.GID}
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
