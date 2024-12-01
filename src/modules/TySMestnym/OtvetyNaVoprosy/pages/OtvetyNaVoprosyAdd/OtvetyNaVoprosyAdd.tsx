import { useLocation, useNavigate } from "react-router";
import { FormProps } from "antd";
import { Page } from "../../../../../components/Page";
import { FormOtvetyNaVoprosy } from "../../form/FormOtvetyNaVoprosy";
import { TAnswer } from "../../../../../api/answers";
import { useCreateAnswer } from "../../../../../hooks";

type FieldType = TAnswer;

export const OtvetyNaVoprosyAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateAnswer();

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
      <FormOtvetyNaVoprosy onFinish={onFinish} />
    </Page>
  );
};
