import {
  Button,
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
import { fileDestination } from "../../../../constants/constants";

type Props = {
  onClose: () => void;
  open: boolean;
  updateId: number;
};

type FieldType = {
  title: string;
  bodyText: string;
  imageId: number;
};

export const DrawerEdit = ({ onClose, open, updateId }: Props) => {
  const { mutate } = useUpdateNewsArt();

  const { data } = useGetNewsArt();

  const initialValue = data?.rows.find((item => item.id === updateId));

  console.log(initialValue);

  const [form] = Form.useForm();

  const handleClose = () => {
    onClose();
  }

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    mutate({ ...values, id: updateId });
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
          autoComplete="off"
          layout="vertical"
          form={form}
          initialValues={initialValue}
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
            <Editor initData={initialValue?.bodyText || ''} onChange={onChangeEditor} />
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
              initialPath={initialValue?.storage_image.imagePath}
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
