import { Button } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};
export const ButtonAction = ({ onEdit, onDelete }: Props) => {
  return (
    <div className="flex gap-2">
      <Button
        type="link"
        onClick={onDelete}
        icon={<EditFilled />}
        title="Править"
      />
      <Button
        type="link"
        onClick={onEdit}
        icon={<DeleteFilled />}
        title="Редактировать"
      />
    </div>
  );
};
