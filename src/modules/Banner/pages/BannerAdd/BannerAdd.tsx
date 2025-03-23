import { useLocation, useNavigate } from "react-router";
import { FormProps } from "antd";
import { FormBanner } from "../../form/FormBanner";
import { Page } from "../../../../components/Page";
import { useCreateBanner } from "../../../../hooks/useBanner";
import { TCreateBanner } from "../../../../api/banner";


type FieldType = TCreateBanner;

export const BannerAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateBanner();

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
      <FormBanner onFinish={onFinish} />
    </Page>
  );
};
