import { Button, Modal } from "antd";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};
export const ModalConfirmation = ({ isOpen, onClose, onConfirm }: Props) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  }
  return (
    <Modal
      title="Удаление записи"
      open={isOpen}
      onCancel={onClose}
      onOk={onConfirm}
      footer={
        <>
          <Button onClick={onClose}>Отмена</Button>
          <Button onClick={handleConfirm} type="primary">Удалить</Button>
        </>
      }
    >
      <div>Подтвердите свой выбор</div>
    </Modal>
  );
};
