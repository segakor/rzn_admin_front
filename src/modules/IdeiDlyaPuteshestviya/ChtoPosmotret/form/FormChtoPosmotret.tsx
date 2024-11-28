import { Button, Divider, Form, Input, Select, Typography } from "antd";
import {
  TChtoPosmotret,
  TCreateChtoPosmotret,
} from "../../../../api/chtoPosmotret";
import {
  fileDestination,
  tabsChtoPosmotret,
  tags,
} from "../../../../constants/constants";
import Editor from "../../../../components/Editor";
import { ImageUploader } from "../../../../components/ImageUploader";
const { TextArea } = Input;

type FieldType = TCreateChtoPosmotret & {
  id: string;
};

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish: (values: any) => void;
  initialValue?: TChtoPosmotret;
};

export const FormChtoPosmotret = ({ onFinish, initialValue }: Props) => {
  const [form] = Form.useForm();

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  const onChangeImageUploader = (e: number) => {
    form.setFieldValue("imageId", e);
  };

  return (
    <Form
      name="chtoPosmotretForm"
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
            Категории
          </Typography.Title>
        }
        name="category"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Select
          allowClear
          style={{ width: "100%" }}
          placeholder="Выбирете категорию"
          options={tabsChtoPosmotret}
          size="large"
        />
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
          options={tags}
          size="large"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Контакты (перенос строки через Enter)
          </Typography.Title>
        }
        name="contacts"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Лонгрид
          </Typography.Title>
        }
        name="template"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Editor
          initData={initialValue?.template || ""}
          onChange={onChangeEditor}
          isLongRead
          destination={fileDestination.CHTO_POSMOTRET}
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
          destination={fileDestination.CHTO_POSMOTRET}
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
