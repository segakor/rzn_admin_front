import { Button, Divider, Form, Input, Typography, InputNumber } from "antd";
import { ImageUploader } from "../../../../../components/ImageUploader";
import { fileDestination } from "../../../../../constants/constants";
import { TBibliotekaPoslushat } from "../../../../../api/biblioteka";

const { TextArea } = Input;

type FieldType = TBibliotekaPoslushat;

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish: (values: any) => void;
  initialValue?: TBibliotekaPoslushat;
};

export const FormPoslushat = ({ onFinish, initialValue }: Props) => {
  const [form] = Form.useForm();

  const onChangeImageUploader = (e: number) => {
    form.setFieldValue("imageId", e);
  };

  return (
    <Form
      name="biblioteka_poslushat"
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
            Продолжительность
          </Typography.Title>
        }
        name="prolongation"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <InputNumber
          min={0}
          placeholder="Введите продолжительность"
          size="large"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Год
          </Typography.Title>
        }
        name="date"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <InputNumber
          min={0}
          placeholder="Введите год"
          size="large"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Ссылка на Я.Музыку
          </Typography.Title>
        }
        name="linkPathYa"
      >
        <Input placeholder="Введите ссылку на Я.Музыку" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Ссылка на izi travel
          </Typography.Title>
        }
        name="linkPathIzi"
      >
        <Input placeholder="Введите ссылку izi travel" size="large" />
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
          destination={fileDestination.BIBLIOTEKA_POSLUSHAT}
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
