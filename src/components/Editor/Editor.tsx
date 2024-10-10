/* eslint-disable @typescript-eslint/no-explicit-any */
import { CKEditor } from "ckeditor4-react";
import { tokenService } from "../../service/tokenService";
import { axiosClient } from "../../config";
import { configToolbarEditor } from "../../constants/constants";
import "../../index.css";

type Props = {
  initData: string;
  onChange: (e: string) => void;
  isLongRead?: boolean;
  destination?: string;
};

export const Editor = ({
  initData,
  onChange,
  isLongRead,
  destination,
}: Props) => {
  const inputHandler = (value: any) => {
    onChange(value.editor.getData());
  };

  const toolbar = isLongRead
    ? configToolbarEditor.longread
    : configToolbarEditor.default;

  return (
    <div className="App">
      <CKEditor
        config={{
          versionCheck: false,
          toolbar: toolbar,
          filebrowserUploadMethod: "xhr",
          fileTools_requestHeaders: {
            Authorization: `Bearer ${tokenService.getJwtToken()}`,
          },
          filebrowserUploadUrl: `${axiosClient.getUri()}/upload/longread?destination=${destination}`,
          removeDialogTabs:
            "image:Link;image:advanced;link:upload;link:advanced",
          stylesSet: [
            {
              name: "RZN_Emphasis",
              element: "div",
              styles: { "font-style": "italic" },
              attributes: { class: "RZN_Emphasis" },
            },
          ],
        }}
        initData={initData}
        onChange={inputHandler}
      />
    </div>
  );
};
