import { useLocation, useNavigate, useParams } from "react-router";
import { FormProps, Spin } from "antd";
import { useGetBannerDetail, useUpdateBanner } from "../../../../hooks/useBanner";
import { Page } from "../../../../components/Page";
import { TUpdateBanner } from "../../../../api/banner";
import { FormBanner } from "../../form/FormBanner";

type FieldType = TUpdateBanner;

export const BannerEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetBannerDetail(id || "");
  const { mutateAsync } = useUpdateBanner();

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
      <FormBanner onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
