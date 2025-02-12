import { useLocation, useNavigate, useParams } from "react-router";
import { FormProps, Spin } from "antd";
import { FormPromturizm } from "../../form/FormPromturizm";
import { Page } from "../../../../../components/Page";
import { useGetPromturizmDetail, useUpdatePromturizm } from "../../../../../hooks/usePromturizm";
import { TUpdatePromturizm } from "../../../../../api/promturizm";

type FieldType = TUpdatePromturizm;

export const PromturizmEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetPromturizmDetail(id || "");
  const { mutateAsync } = useUpdatePromturizm();

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
      <FormPromturizm onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
