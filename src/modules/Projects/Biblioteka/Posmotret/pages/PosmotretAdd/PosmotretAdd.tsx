import { useLocation, useNavigate } from "react-router";
import { FormProps } from "antd";
import { Page } from "../../../../../../components/Page";
import { FormPosmotret } from "../../form/FormPosmotret";
import { useCreateBibliotekaPosmotret } from "../../../../../../hooks/useBibliotekaPosmotret";
import { TCreateBibliotekaPosmotret } from "../../../../../../api/biblioteka";


type FieldType = TCreateBibliotekaPosmotret;

export const PosmotretAdd = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useCreateBibliotekaPosmotret();

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
      <FormPosmotret onFinish={onFinish} />
    </Page>
  );
};
