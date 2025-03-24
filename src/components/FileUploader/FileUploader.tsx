import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import type { UploadFile as TUploadFile, UploadProps } from "antd";
import { deleteFile, uploadFile } from "../../api/uploadFile";

type Props = {
  onChange: (e: number) => void;
};

export const FileUploader = ({ onChange }: Props) => {
  const [fileList, setFileList] = useState<TUploadFile[]>([]);

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Загрузить</div>
    </button>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getFileData = async (data: any) => {
    try {
      const res = await uploadFile(data);
      if (res) {
        onChange(res.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Upload
        fileList={fileList}
        onChange={handleChange}
        accept="application/pdf"
        customRequest={(data) => getFileData(data)}
        onRemove={({ response }) => deleteFile({ id: response.id, filePath: response.filePath })}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
    </>
  );
};
