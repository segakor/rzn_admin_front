import { useLocation, useNavigate, useParams } from "react-router";
import { GoBackButton } from "../../../../../components/Buttons";
import {
  useGetChtoPosmotretDetail,
  useUpdateChtoPosmotret,
} from "../../../../../hooks";
import { FormProps, Spin, Typography } from "antd";
import { TUpdateChtoPosmotret } from "../../../../../api/chtoPosmotret";
import { FormChtoPosmotret } from "../../form/FormChtoPosmotret";

type FieldType = TUpdateChtoPosmotret;

export const ChtoPosmotretEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetChtoPosmotretDetail(id || "");
  const { mutateAsync } = useUpdateChtoPosmotret();

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

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div className="grid gap-3">
      <div>
        <GoBackButton />
      </div>
      <Typography.Title className="mb-2" level={3}>
        Редактирование
      </Typography.Title>
      <FormChtoPosmotret onFinish={onFinish} initialValue={data} />
    </div>
  );
};
