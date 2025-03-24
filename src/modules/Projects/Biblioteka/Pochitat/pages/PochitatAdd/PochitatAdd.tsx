import { useLocation, useNavigate } from "react-router";
import { FormProps } from "antd";
import { Page } from "../../../../../../components/Page";
import { FormPochitat } from "../../form/FormPochitat";
import { useCreateBibliotekaPochitat } from "../../../../../../hooks/useBibliotekaPochitat";
import { TCreateBibliotekaPochitat } from "../../../../../../api/biblioteka";


type FieldType = TCreateBibliotekaPochitat;

export const PochitatAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateBibliotekaPochitat();

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
      <FormPochitat onFinish={onFinish} />
    </Page>
  );
};
