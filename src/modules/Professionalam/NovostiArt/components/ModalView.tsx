import { Modal } from "antd";
import { TNewsArt } from "../../../../api/news";
import { getImageUrl } from "../../../../service/getImageUrl";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  viewNews?: TNewsArt;
};
export const ModalView = ({ isOpen, onClose, viewNews }: Props) => {
  if (!viewNews) {
    return null
  }
  return (
    <Modal
      title="`"
      open={isOpen}
      onCancel={onClose}
      footer={<></>}
      width={700}
    >
      <div className="grid gap-3">
        <img
          className="rounded-2xl"
          src={getImageUrl(viewNews?.storage_image?.imagePath)}
        />
        <div className="text-md text-right">{new Date(viewNews?.createdAt).toLocaleString('ru-RU', { dateStyle: 'short', })}</div>
        <div className="text-2xl">{viewNews?.title}</div>
        <div
          className="whitespace-pre-line text-md"
          dangerouslySetInnerHTML={{ __html: viewNews?.bodyText }}
        />
      </div>
    </Modal>
  );
};
