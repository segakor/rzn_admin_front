import { useLocation, useNavigate, useParams } from "react-router";
import { FormProps, Spin } from "antd";
import { FormPochitat } from "../../form/FormPochitat";
import { Page } from "../../../../../../components/Page";
import { useGetBibliotekaPochitatDetail, useUpdateBibliotekaPochitat } from "../../../../../../hooks/useBibliotekaPochitat";
import { TUpdateBibliotekaPochitat } from "../../../../../../api/biblioteka";


type FieldType = TUpdateBibliotekaPochitat;

export const PochitatEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetBibliotekaPochitatDetail(id || "");
  const { mutateAsync } = useUpdateBibliotekaPochitat();

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
      <FormPochitat onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
