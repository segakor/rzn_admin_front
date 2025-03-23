import { useLocation, useNavigate, useParams } from "react-router";
import { FormProps, Spin } from "antd";
import { Page } from "../../../../../components/Page";
import { FormNasledie } from "../../form/FormNasledie";
import { TUpdateNasledie } from "../../../../../api/nasledie";
import { useGetNasledieDetail, useUpdateNasledie } from "../../../../../hooks/useNasledie";

type FieldType = TUpdateNasledie;

export const NasledieEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetNasledieDetail(id || "");
  const { mutateAsync } = useUpdateNasledie();

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
      <FormNasledie onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
