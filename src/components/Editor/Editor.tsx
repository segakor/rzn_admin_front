/* eslint-disable @typescript-eslint/no-explicit-any */
import { CKEditor } from "ckeditor4-react";

type Props = {
  initData: string;
  onChange: (e: string) => void;
};

export const Editor = ({ initData, onChange }: Props) => {
  
  const inputHandler = (value:any) => {
    onChange(value.editor.getData());
  };

  return (
    <div className="App">
      <CKEditor
        config={{
          versionCheck: false,
          toolbar: [
            [
              "Bold",
              "Italic",
              "-",
              "BulletedList",
              "-",
              "Link",
              /*  "-",
              "Image", */
              "-",
              "Table",
            ],
            "/",
            ["Source"],
          ],
          uiColor: "#AADC6E",
          extraPlugins: "uploadimage",
          filebrowserUploadMethod: "form",
          filebrowserUploadUrl: "/uploader/upload",
          removeDialogTabs:
            "image:info;image:Link;image:advanced;link:upload;link:advanced",
        }}
        initData={initData}
        onChange={inputHandler}
        /*  onInstanceReady={() => {
          alert("Editor is ready!");
        }} */
      />
    </div>
  );
};
