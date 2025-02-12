import { useLocation, useNavigate } from "react-router";
import { FormProps } from "antd";
import { FormPromturizm } from "../../form/FormPromturizm";
import { Page } from "../../../../../components/Page";
import { useCreatePromturizm } from "../../../../../hooks/usePromturizm";
import { TCreatePromturizm } from "../../../../../api/promturizm";

type FieldType = TCreatePromturizm;

export const PromturizmAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreatePromturizm();

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
      <FormPromturizm onFinish={onFinish} />
    </Page>
  );
};
