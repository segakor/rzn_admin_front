import { useLocation, useNavigate, useParams } from "react-router";
import { FormProps, Spin } from "antd";
import { Page } from "../../../../../components/Page";
import { FormGid } from "../../form/FormGid";
import { useGetGidDetail, useUpdateGid } from "../../../../../hooks/useGid";
import { TUpdateGid } from "../../../../../api/gid";

type FieldType = TUpdateGid;

export const GidEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetGidDetail(id || "");
  const { mutateAsync } = useUpdateGid();

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
      <FormGid onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
