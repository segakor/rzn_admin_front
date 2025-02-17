import { useLocation, useNavigate, useParams } from "react-router";
import {
  useGetSamostoyatelnyeMarshrutyDetail,
  useUpdateSamostoyatelnyeMarshruty,
} from "../../../../../hooks";
import { FormProps, Spin } from "antd";
import { FormSamostoyatelnyeMarshruty } from "../../form/FormSamostoyatelnyeMarshruty";
import { TUpdateSamostoyatelnyeMarshruty } from "../../../../../api/samostoyatelnyeMarshruty";
import { Page } from "../../../../../components/Page";

type FieldType = TUpdateSamostoyatelnyeMarshruty;

export const SamostoyatelnyeMarshrutyEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetSamostoyatelnyeMarshrutyDetail(id || "");
  const { mutateAsync } = useUpdateSamostoyatelnyeMarshruty();

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
    <Page type="edit">
      <FormSamostoyatelnyeMarshruty onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
