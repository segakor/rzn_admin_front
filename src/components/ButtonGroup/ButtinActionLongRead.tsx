import { Button } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
  typeBlock: string;
  parentId?: number;
  childId?: number;
  children: React.ReactNode;
};
export const ButtonActionLongRead = ({
  onEdit,
  onDelete,
  parentId,
  childId,
  typeBlock,
  children,
}: Props) => {
  return (
    <div className="grid gap-2 justify-between items-center rounded-lg border-dashed border-blue-700 border-2 p-2 mt-2 mb-2">
      {children}
      <div>
        <div>
          {childId && <div>childId: {childId}</div>}
          {parentId && <div>parentId: {parentId}</div>}
          <div>typeBlock: {typeBlock}</div>
        </div>
        <div>
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
      </div>
    </div>
  );
};
