import { Button, Form, FormProps } from "antd";
import {
  useCreateLongRead,
  useGetLongRead,
  useUpdateLongRead,
} from "../../hooks/useLongRead";
import Editor from "../Editor";

type FieldType = {
  title: string;
  bodyText: string;
};

type Props = {
  longreadTitle: string;
};
export const LongreadEditor = ({ longreadTitle }: Props) => {
  const { data, isLoading } = useGetLongRead(longreadTitle);

  const { mutate } = useUpdateLongRead();

  const { mutate: mutateCreate } = useCreateLongRead();

  const [form] = Form.useForm();

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log(values);
    mutate({ ...values, title: longreadTitle });
  };

  return (
    <div>
      {!data?.bodyText && !isLoading && (
        <div>
          <Button
            onClick={() =>
              mutateCreate({ bodyText: "init", title: longreadTitle })
            }
          >
            Create
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
              destination={longreadTitle}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
