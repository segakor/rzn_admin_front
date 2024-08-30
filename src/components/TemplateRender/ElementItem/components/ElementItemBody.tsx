import { TTemplate } from "../../../../types/types";
import { ElementItemBodyEdit } from "./ElementItemBodyEdit";

type Props = {
  item: TTemplate;
  isEdit?: boolean;
};

export const ElementItemBody = ({ item, isEdit }: Props) => {
  /* const { title, text, srcImg } = item; */

  if (isEdit) {
    return <ElementItemBodyEdit item={item} />;
  }
  return (
    <div className="grid gap-3 mb-3">
      {item?.title && <div className="font-medium">{item.title}</div>}
      {/*  {item?.title && (
        <div className="flex gap-3">
          <div className="font-medium">{item.title}</div>
          <Tooltip placement="right" title={"title"}>
            <QuestionCircleFilled />
          </Tooltip>
        </div>
      )} */}
      {item?.text && (
        <div
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: item?.text }}
        />
      )}
      {item?.srcImg && (
        <img className="rounded-3xl max-w-[640px]" src={item?.srcImg} />
      )}
    </div>
  );
};
