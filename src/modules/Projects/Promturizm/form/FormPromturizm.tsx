import { Button, Divider, Form, Input, Select, Typography, InputNumber } from "antd";
import {
  fileDestination,
  tagsPromturizm,
} from "../../../../constants/constants";
import Editor from "../../../../components/Editor";
import { ImageUploader } from "../../../../components/ImageUploader";
import { TPromturizm } from "../../../../api/promturizm";

type FieldType = TPromturizm

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish: (values: any) => void;
  initialValue?: TPromturizm;
};

export const FormPromturizm = ({
  onFinish,
  initialValue,
}: Props) => {
  const [form] = Form.useForm();

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  const onChangeEditorSubtitle = (e: string) => {
    form.setFieldValue("subTitle", e);

  }

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
        <Editor
          initData={initialValue?.subTitle || ""}
          onChange={onChangeEditorSubtitle}
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Адрес
          </Typography.Title>
        }
        name="address"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите адрес" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Возраст
          </Typography.Title>
        }
        name="ageLimit"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <InputNumber min={0} placeholder="Введите возраст" size="large" style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Тэги
          </Typography.Title>
        }
        name="tags"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Выбирете тэги"
          options={tagsPromturizm}
          size="large"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Лонгрид в popup
          </Typography.Title>
        }
        name="template"
        rules={[
          {
            required: true,
            message: "Заполните обязательное поле",
          },
        ]}
      >
        <Editor
          initData={initialValue?.template || ""}
          onChange={onChangeEditor}
          isLongRead
          destination={fileDestination.PROMTURIZM}
        />
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
          destination={fileDestination.SAMOSTOYATELNYE_MARSHRUTY}
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
