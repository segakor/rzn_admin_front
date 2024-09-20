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
import { useGetNewsArt, useUpdateNewsArt } from "../../../../hooks/useNewsArt";
import { dateFormat, fileDestination } from "../../../../constants/constants";
import { Moment } from "moment";
import dayjs from 'dayjs';

type Props = {
  onClose: () => void;
  open: boolean;
  updateId: number;
};

type FieldType = {
  title: string;
  bodyText: string;
  imageId: number;
  date: Moment;
};

export const DrawerEdit = ({ onClose, open, updateId }: Props) => {
  const { mutate } = useUpdateNewsArt();

  const { data } = useGetNewsArt();

  const findRow = data?.rows.find((item => item.id === updateId));
  const initialValues = { ...findRow, date: dayjs(new Date(findRow?.date || '')) }

  const [form] = Form.useForm();


  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    mutate({ ...values, id: updateId, date: values.date.format() });
    handleClose()
  };

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  const onChangeImageUploader = (e: number) => {
    form.setFieldValue("imageId", e);
  };

  return (
    <Drawer
      title="Обновить новость АРТ"
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
          initialValues={initialValues}
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
            <Editor initData={initialValues?.bodyText || ''} onChange={onChangeEditor} />
          </Form.Item>
          <Form.Item<FieldType>
            label={
              <Typography.Title className="!m-0" level={5}>
                Дата
              </Typography.Title>
            }
            name="date"
            rules={[{ required: true, message: "Заполните обязательное поле" }]}
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
              destination={fileDestination.NOVOSTI_ART}
              initialPath={initialValues?.storage_image?.imagePath}
            />
          </Form.Item>
          <Divider className="mt-7 mb-7" />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
            >
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      )}
    </Drawer>
  );
};
