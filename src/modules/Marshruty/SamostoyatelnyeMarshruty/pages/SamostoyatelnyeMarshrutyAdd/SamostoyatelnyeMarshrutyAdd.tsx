import { useLocation, useNavigate } from "react-router";
import { TCreateSamostoyatelnyeMarshruty } from "../../../../../api/samostoyatelnyeMarshruty";
import { useCreateSamostoyatelnyeMarshruty } from "../../../../../hooks";
import { GoBackButton } from "../../../../../components/Buttons";
import { FormProps, Typography } from "antd";
import { FormSamostoyatelnyeMarshruty } from "../../form/FormSamostoyatelnyeMarshruty";

type FieldType = TCreateSamostoyatelnyeMarshruty;

export const SamostoyatelnyeMarshrutyAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateSamostoyatelnyeMarshruty();

  const pageType = state?.pageType;

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await mutateAsync(values);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  if (!pageType) {
    navigate("/");
  }

  return (
    <div className="grid gap-3">
      <div>
        <GoBackButton />
      </div>
      <Typography.Title className="mb-2" level={3}>
        Добавить запись
      </Typography.Title>
      <FormSamostoyatelnyeMarshruty onFinish={onFinish} />
    </div>
  );
};
