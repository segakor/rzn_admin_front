import { useLocation, useNavigate, useParams } from "react-router";
import { useGetAnswerDetail, useUpdateAnswer } from "../../../../../hooks";
import { FormProps } from "antd";
import { FormOtvetyNaVoprosy } from "../../form/FormOtvetyNaVoprosy";
import { Page } from "../../../../../components/Page";
import { TUpdateAnswer } from "../../../../../api/answers";

type FieldType = TUpdateAnswer;

export const OtvetyNaVoprosyEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetAnswerDetail(id || "");
  const { mutateAsync } = useUpdateAnswer();

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
    <Page type="edit" isLoading={isLoading}>
      <FormOtvetyNaVoprosy onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
