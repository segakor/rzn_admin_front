import { Button } from "antd";
import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
  onView: () => void;
};
export const ButtonAction = ({ onEdit, onDelete, onView }: Props) => {
  return (
    <div className="flex gap-2">
      <Button
        type="link"
        onClick={onView}
        icon={<EyeFilled />}
        title="Просмотр"
      />
      <Button
        type="link"
        onClick={onEdit}
        icon={<EditFilled />}
        title="Редактировать"
      />
      <Button
        type="link"
        onClick={onDelete}
        icon={<DeleteFilled />}
        title="Править"
      />
    </div>
  );
};
