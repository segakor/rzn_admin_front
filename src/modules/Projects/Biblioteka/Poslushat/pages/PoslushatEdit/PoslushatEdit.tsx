import { useLocation, useNavigate, useParams } from "react-router";
import { FormProps, Spin } from "antd";
import { FormPoslushat } from "../../form/FormPoslushat";
import { Page } from "../../../../../../components/Page";
import { useGetBibliotekaPoslushatDetail, useUpdateBibliotekaPoslushat } from "../../../../../../hooks/useBibliotekaPoslushat";
import { TUpdateBibliotekaPoslushat } from "../../../../../../api/biblioteka";


type FieldType = TUpdateBibliotekaPoslushat;

export const PoslushatEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetBibliotekaPoslushatDetail(id || "");
  const { mutateAsync } = useUpdateBibliotekaPoslushat();

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
      <FormPoslushat onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
