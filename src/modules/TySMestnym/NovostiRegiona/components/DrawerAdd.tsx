import {
  Button,
  DatePicker,
  Divider,
  Drawer,
  Form,
  FormProps,
  Input,
  Typography,
} from "antd";
import Editor from "../../../../components/Editor";
import { ImageUploader } from "../../../../components/ImageUploader";
import { dateFormat, fileDestination } from "../../../../constants/constants";
import dayjs, { Dayjs } from "dayjs";
import { useCreateNewsRegion } from "../../../../hooks";

type Props = {
  onClose: () => void;
  open: boolean;
};

type FieldType = {
  title: string;
  bodyText: string;
  imageId: number;
  date: Dayjs;
};

export const DrawerAdd = ({ onClose, open }: Props) => {
  const { mutate } = useCreateNewsRegion();

  const [form] = Form.useForm();

  const handleClose = () => {
    onClose();
    form.resetFields();
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    mutate({ ...values, date: values.date.format() });
    handleClose();
  };

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  const onChangeImageUploader = (e: number) => {
    form.setFieldValue("imageId", e);
  };

  return (
    <Drawer
      title="Добавить новость региона"
      onClose={handleClose}
      open={open}
      size={"large"}
    >
      {open && (
        <Form
          name="newsArt"
          onFinish={onFinish}
          layout="vertical"
          form={form}
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
          <Form.Item<FieldType>
            label={
              <Typography.Title className="!m-0" level={5}>
                Дата
              </Typography.Title>
            }
            name="date"
            rules={[{ required: true, message: "Заполните обязательное поле" }]}
            initialValue={dayjs(new Date())}
          >
            <DatePicker size="large" format={dateFormat} />
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
              destination={fileDestination.NOVOSTI_REGION}
            />
          </Form.Item>
          <Divider className="mt-7 mb-7" />
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      )}
    </Drawer>
  );
};
