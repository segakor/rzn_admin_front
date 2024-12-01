import { Button } from "antd";
import { ModalConfirmation } from "../ModalConfirmation";
import { ReactNode } from "react";

type Props = {
  title: string;
  handleAdd: () => void;
  children: ReactNode;
  isOpenModalConfirmation: boolean;
  onCloseModalConfirmation: () => void;
  onConfirmModalConfirm: () => void;
};

export const PageTable = ({
  title,
  handleAdd,
  children,
  isOpenModalConfirmation,
  onCloseModalConfirmation,
  onConfirmModalConfirm,
}: Props) => {
  return (
    <div className="grid gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">{title}</h1>
        <Button size="large" type="primary" onClick={handleAdd}>
          Добавить объект
        </Button>
      </div>
      <div className="bg-slate-100 p-5">
        {children}
        <ModalConfirmation
          isOpen={isOpenModalConfirmation}
          onClose={onCloseModalConfirmation}
          onConfirm={onConfirmModalConfirm}
        />
      </div>
    </div>
  );
};
