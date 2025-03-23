import { Button, Divider, Form, Input, Typography, Select, Alert } from "antd";
import {
  categoryNasledie,
  fileDestination,
} from "../../../../constants/constants";
import Editor from "../../../../components/Editor";
import { ImageUploader } from "../../../../components/ImageUploader";
import { TNasledie } from "../../../../api/nasledie";

const { TextArea } = Input;

type FieldType = TNasledie;

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish: (values: any) => void;
  initialValue?: TNasledie;
};

export const FormNasledie = ({ onFinish, initialValue }: Props) => {
  const [form] = Form.useForm();

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  const onChangeImageUploader = (e: number) => {
    form.setFieldValue("imageId", e);
  };

  return (
    <Form
      name="nasledie"
      onFinish={onFinish}
      layout="vertical"
      form={form}
      initialValues={initialValue}
    >
      <Alert
        description={
          <div>
            Согласно дизайну: <br />
            <b>Поле "загаловок"</b> - для Рязани адрес объекта, для Касимова название
            объекта
            <br />
            <b>Поле "описание"</b> - для Касимова адрес объекта, для Рязани описание объекта
          </div>
        }
        type="info"
        showIcon
        className="mb-4"
      />
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
        <TextArea placeholder="Введите описание" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Категория
          </Typography.Title>
        }
        name="category"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Select
          allowClear
          style={{ width: "100%" }}
          placeholder="Выбирете категорию"
          options={categoryNasledie}
          size="large"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Лонгрид
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
          destination={fileDestination.NASLEDIE}
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
          destination={fileDestination.NASLEDIE}
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
