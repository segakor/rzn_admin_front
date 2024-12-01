import { Button, Divider, Form, Input, Select, Space, Typography } from "antd";
import { tabsOtvetyNaVoprosy } from "../../../../constants/constants";
import { PlusOutlined } from "@ant-design/icons";
import { TAnswer } from "../../../../api/answers";
import Editor from "../../../../components/Editor";

type FieldType = TAnswer;

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish: (values: any) => void;
  initialValue?: TAnswer;
};

export const FormOtvetyNaVoprosy = ({ onFinish, initialValue }: Props) => {
  const [form] = Form.useForm();

  const onChangeEditor = (e: string) => {
    form.setFieldValue("bodyText", e);
  };

  return (
    <Form
      name="answerForm"
      onFinish={onFinish}
      layout="vertical"
      form={form}
      initialValues={initialValue}
    >
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Вопрос
          </Typography.Title>
        }
        name="title"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите вопрос" size="large" />
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
          options={tabsOtvetyNaVoprosy}
          size="large"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label={
          <Typography.Title className="!m-0" level={5}>
            Ключевые слова (через разделитель ";")
          </Typography.Title>
        }
        name="keywords"
        rules={[{ required: true, message: "Заполните обязательное поле" }]}
      >
        <Input placeholder="Введите ключевые слова" size="large" />
      </Form.Item>
      <Typography.Title level={5}>Ответы</Typography.Title>
      <Form.List name="answers">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                className="grid gap-3 p-8 border-2 rounded-md border-b-2 mb-5"
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "title"]}
                  label={
                    <Typography.Title className="!m-0" level={5}>
                      Заголовок ответа
                    </Typography.Title>
                  }
                  rules={[
                    { required: true, message: "Заполните обязательное поле" },
                  ]}
                >
                  <Input placeholder="Введите заголовок ответа" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "template"]}
                  label={
                    <Typography.Title className="!m-0" level={5}>
                      Ответ
                    </Typography.Title>
                  }
                  rules={[
                    { required: true, message: "Заполните обязательное поле" },
                  ]}
                >
                  <Editor
                    initData={form.getFieldValue(["answers", name, "template"])}
                    onChange={onChangeEditor}
                  />
                </Form.Item>
                <div className="flex justify-end">
                  <Button type="dashed" onClick={() => remove(name)}>
                    Удалить
                  </Button>
                </div>
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Добавить ответ
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
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
