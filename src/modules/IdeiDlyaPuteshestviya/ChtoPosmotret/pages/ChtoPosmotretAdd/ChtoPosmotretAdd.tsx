import { useLocation, useNavigate } from "react-router";
import { GoBackButton } from "../../../../../components/Buttons";
import { useCreateChtoPosmotret } from "../../../../../hooks";
import { FormProps, Typography } from "antd";
import { TCreateChtoPosmotret } from "../../../../../api/chtoPosmotret";
import { FormChtoPosmotret } from "../../form/FormChtoPosmotret";

type FieldType = TCreateChtoPosmotret;

export const ChtoPosmotretAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateChtoPosmotret();

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
      <FormChtoPosmotret onFinish={onFinish} />
    </div>
  );
};
