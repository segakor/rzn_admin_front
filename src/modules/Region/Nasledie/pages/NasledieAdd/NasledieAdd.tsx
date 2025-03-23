import { useLocation, useNavigate } from "react-router";
import { FormProps } from "antd";
import { FormNasledie } from "../../form/FormNasledie";
import { Page } from "../../../../../components/Page";
import { useCreateNasledie } from "../../../../../hooks/useNasledie";
import { TCreateNasledie } from "../../../../../api/nasledie";

type FieldType = TCreateNasledie;

export const NasledieAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateNasledie();

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
      <FormNasledie onFinish={onFinish} />
    </Page>
  );
};
