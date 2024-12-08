import { useLocation, useNavigate } from "react-router";
import { FormProps } from "antd";
import { FormOrganizovannyeMarshruty } from "../../form/FormOrganizovannyeMarshruty";
import { Page } from "../../../../../components/Page";
import { useCreateOrganizovannyeMarshruty } from "../../../../../hooks/useOrganizovannyeMarshruty";
import { TCreateOrganizovannyeMarshruty } from "../../../../../api/organizovannyeMarshruty";

type FieldType = TCreateOrganizovannyeMarshruty;

export const OrganizovannyeMarshrutyAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateOrganizovannyeMarshruty();

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
      <FormOrganizovannyeMarshruty onFinish={onFinish} />
    </Page>
  );
};
