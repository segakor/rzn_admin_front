import { useLocation, useNavigate } from "react-router";
import { FormProps } from "antd";
import { Page } from "../../../../../../components/Page";
import { FormPoslushat } from "../../form/FormPoslushat";
import { useCreateBibliotekaPoslushat } from "../../../../../../hooks/useBibliotekaPoslushat";
import { TCreateBibliotekaPoslushat } from "../../../../../../api/biblioteka";


type FieldType = TCreateBibliotekaPoslushat;

export const PoslushatAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateBibliotekaPoslushat();

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
      <FormPoslushat onFinish={onFinish} />
    </Page>
  );
};
