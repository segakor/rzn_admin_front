/* eslint-disable @typescript-eslint/no-explicit-any */
import { CKEditor } from "ckeditor4-react";
import { tokenService } from "../../service/tokenService";
import { axiosClient } from "../../config";
import { configStylesSet, configToolbar } from "../../constants/editor";
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

  const toolbar = isLongRead ? configToolbar.longread : configToolbar.default;

  return (
    <div className="editor">
      <div className="italic"><b>Рекомендация: </b>перенос строк делать через Shift + Enter</div>
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
          stylesSet: configStylesSet,
          contentsCss:
            ".cke_editable img { max-width: 800px !important; border-radius: 30px !important ;height: auto !important; }",
          image_prefillDimensions: false,
        }}
        initData={initData}
        onChange={inputHandler}
      />
    </div>
  );
};
