import { useLocation, useNavigate, useParams } from "react-router";
import { FormProps, Spin } from "antd";
import { FormOrganizovannyeMarshruty } from "../../form/FormOrganizovannyeMarshruty";
import { Page } from "../../../../../components/Page";
import { TUpdateOrganizovannyeMarshruty } from "../../../../../api/organizovannyeMarshruty";
import { useGetOrganizovannyeMarshrutyDetail, useUpdateOrganizovannyeMarshruty } from "../../../../../hooks/useOrganizovannyeMarshruty";

type FieldType = TUpdateOrganizovannyeMarshruty;

export const OrganizovannyeMarshrutyEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetOrganizovannyeMarshrutyDetail(id || "");
  const { mutateAsync } = useUpdateOrganizovannyeMarshruty();

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
      <FormOrganizovannyeMarshruty onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
