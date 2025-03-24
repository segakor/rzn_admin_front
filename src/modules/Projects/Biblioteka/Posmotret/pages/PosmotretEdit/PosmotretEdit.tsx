import { useLocation, useNavigate, useParams } from "react-router";
import { FormProps, Spin } from "antd";
import { FormPosmotret } from "../../form/FormPosmotret";
import { Page } from "../../../../../../components/Page";
import { useGetBibliotekaPosmotretDetail, useUpdateBibliotekaPosmotret } from "../../../../../../hooks/useBibliotekaPosmotret";
import { TUpdateBibliotekaPosmotret } from "../../../../../../api/biblioteka";


type FieldType = TUpdateBibliotekaPosmotret;

export const PosmotretEdit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetBibliotekaPosmotretDetail(id || "");
  const { mutateAsync } = useUpdateBibliotekaPosmotret();

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
      <FormPosmotret onFinish={onFinish} initialValue={data} />
    </Page>
  );
};
