import { Button, Form, FormProps, Spin } from "antd";
import {
  useCreateLongRead,
  useGetLongRead,
  useUpdateLongRead,
} from "../../hooks/useLongRead";
import Editor from "../Editor";
import { useState } from "react";
import { ModalPreview } from "../ModalPreview";

type FieldType = {
  title: string;
  bodyText: string;
};

type Props = {
  longreadTitle: string;
};
export const LongreadEditor = ({ longreadTitle }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { data, isLoading } = useGetLongRead(longreadTitle);

  const { mutate } = useUpdateLongRead();

  const { mutate: mutateCreate } = useCreateLongRead();

  const [form] = Form.useForm();

  const bodyTextWatched = Form.useWatch("bodyText", form);

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    mutate({ ...values, title: longreadTitle });
  };

  if (isLoading) {
    return <Spin />
  }

  return (
    <div>
      {!data?.bodyText && (
        <div>
          <Button
            onClick={() =>
              mutateCreate({ bodyText: "init", title: longreadTitle })
            }
          >
            Добавить
          </Button>
        </div>
      )}
      <Form
        name="LongReadEditor"
        onFinish={onFinish}
        layout="vertical"
        form={form}
      >
        <Form.Item<FieldType>
          name="bodyText"
          rules={[{ required: true, message: "Заполните обязательное поле" }]}
        >
          {data?.bodyText && (
            <Editor
              initData={data?.bodyText}
              onChange={onChangeEditor}
              isLongRead
              destination={`lognread_${longreadTitle}`}
            />
          )}
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" size="large">
            Сохранить
          </Button>
          <Button type='dashed' onClick={() => setIsOpenModal(true)} size="large" className='ml-2'>
            Предпросмотр
          </Button>
        </Form.Item>
      </Form>
      <ModalPreview onClose={() => setIsOpenModal(false)} isOpen={isOpenModal} bodyText={bodyTextWatched} />
    </div >
  );
};
