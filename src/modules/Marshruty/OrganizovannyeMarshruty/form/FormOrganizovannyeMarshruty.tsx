import { Button, Divider, Form, Input, Typography } from "antd";
import { fileDestination } from "../../../../constants/constants";
import Editor from "../../../../components/Editor";
import { ImageUploader } from "../../../../components/ImageUploader";
import {
  TCreateOrganizovannyeMarshruty,
  TOrganizovannyeMarshruty,
} from "../../../../api/organizovannyeMarshruty";
import DatePicker from "../../../../components/DatePicker/DatePicker";
import { parseISO } from "date-fns";

type FieldType = TCreateOrganizovannyeMarshruty & {
  id: string;
};

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish: (values: any) => void;
  initialValue?: TOrganizovannyeMarshruty;
};

export const FormOrganizovannyeMarshruty = ({
  onFinish,
  initialValue,
}: Props) => {
  const [form] = Form.useForm();

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  const onChangeImageUploader = (e: number) => {
    form.setFieldValue("imageId", e);
  };

  const linkPath = Form.useWatch("linkPath", form);

  const initilaValues = {
    ...initialValue,
    dates: initialValue?.dates.map((item) => parseISO(item)),
  };

  return (
    <Form
      name="samostoyatelnyeMarshruty"
      onFinish={onFinish}
      layout="vertical"
      form={form}
      initialValues={initilaValues}
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
            Email
          </Typography.Title>
        }
        name="email"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите email" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Даты
          </Typography.Title>
        }
        name="dates"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <DatePicker
          multiple
          maxTagCount="responsive"
          size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Стоимость
          </Typography.Title>
        }
        name="price"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите Что входит в стоимость" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Что входит в стоимость
          </Typography.Title>
        }
        name="includePrice"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите Что входит в стоимость" size="large" />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Количество дней
          </Typography.Title>
        }
        name="days"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите Что входит в стоимость" size="large" />
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
            required: !linkPath ? true : false,
            message: "Заполните обязательное поле",
          },
        ]}
      >
        <Editor
          initData={initialValue?.template || ""}
          onChange={onChangeEditor}
          isLongRead
          destination={fileDestination.ORGANIZOVANNYE_MARSHRUTY}
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
          destination={fileDestination.ORGANIZOVANNYE_MARSHRUTY}
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
