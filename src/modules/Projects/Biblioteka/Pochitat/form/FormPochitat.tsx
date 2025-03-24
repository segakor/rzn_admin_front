import { Button, Divider, Form, Input, Typography } from "antd";
import { ImageUploader } from "../../../../../components/ImageUploader";
import { fileDestination } from "../../../../../constants/constants";
import { TBibliotekaPochitat } from "../../../../../api/biblioteka";

const { TextArea } = Input;

type FieldType = TBibliotekaPochitat;

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish: (values: any) => void;
  initialValue?: TBibliotekaPochitat;
};

export const FormPochitat = ({ onFinish, initialValue }: Props) => {
  const [form] = Form.useForm();

  const onChangeImageUploader = (e: number) => {
    form.setFieldValue("imageId", e);
  };

  return (
    <Form
      name="biblioteka_Pochitat"
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
        <TextArea placeholder="Введите описание" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Ссылка на ozon
          </Typography.Title>
        }
        name="linkPathOzon"
      >
        <Input placeholder="Введите ссылку на ozon" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Ссылка на литрес
          </Typography.Title>
        }
        name="linkPathLitres"
      >
        <Input placeholder="Введите ссылку на litres" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Ссылка
          </Typography.Title>
        }
        name="linkPath"
      >
        <Input placeholder="Введите ссылку" size="large" />
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
          destination={fileDestination.BIBLIOTEKA_POCHITAT}
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
