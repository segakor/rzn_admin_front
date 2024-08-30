import { Button } from "antd";
import { dictElment } from "../../../../constants/constants";

type Props = {
  title:
    | "LEAD_BLOCK"
    | "LONG_READ_BLOCK"
    | "LONG_READ_ITEM_BLOCK"
    | "TEXT_BLOCK";
  onDelete: () => void;
  onEdit: () => void;
  isEdit: boolean;
};

export const CardTitle = ({ title, onDelete, onEdit, isEdit }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-between px-2">
      <div>{dictElment[title]}</div>
      {!isEdit ? (
        <div className="flex gap-2">
          <Button onClick={onEdit}>Редактировать</Button>
          <Button onClick={onDelete}>Удалить</Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => alert("asdasd")}>Сохранить</Button>
          <Button onClick={onEdit}>Закрыть</Button>
        </div>
      )}
    </div>
  );
};
