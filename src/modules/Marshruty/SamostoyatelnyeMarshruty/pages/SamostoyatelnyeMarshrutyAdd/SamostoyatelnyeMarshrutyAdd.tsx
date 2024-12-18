import { useLocation, useNavigate } from "react-router";
import { TCreateSamostoyatelnyeMarshruty } from "../../../../../api/samostoyatelnyeMarshruty";
import { useCreateSamostoyatelnyeMarshruty } from "../../../../../hooks";
import { FormProps } from "antd";
import { FormSamostoyatelnyeMarshruty } from "../../form/FormSamostoyatelnyeMarshruty";
import { Page } from "../../../../../components/Page";

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
    <Page type="add">
      <FormSamostoyatelnyeMarshruty onFinish={onFinish} />
    </Page>
  );
};
