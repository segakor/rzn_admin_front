import { useLocation, useNavigate } from "react-router";
import { FormProps } from "antd";
import { Page } from "../../../../../components/Page";
import { TCreateGid } from "../../../../../api/gid";
import { FormGid } from "../../form/FormGid";
import { useCreateGid } from "../../../../../hooks/useGid";

type FieldType = TCreateGid;

export const GidAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateGid();

  const pageType = state?.pageType; //TODO: перепроверить, кажется не работает нигде

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
      <FormGid onFinish={onFinish} />
    </Page>
  );
};
