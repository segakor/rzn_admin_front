import { Alert } from "antd";

/* import { FileUploader } from "../../../components/FileUploader";
 */
export const BazaZnanij = () => {
  return (
    <div>
      {/* <FileUploader /> */}
      <Alert
        description={
          <div>
            Не удалось загрузить данные
          </div>
        }
        type='error'
        showIcon
      />
    </div>
  );
};
