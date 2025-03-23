import { Button, Modal } from "antd";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  bodyText: string;
};
export const ModalPreview = ({ isOpen, onClose, bodyText }: Props) => {

  const bodyWithStyles = bodyText
    ?.replaceAll("<h3>", "<h3 class='md:text-[40px] text-[30px] leading-tight'>")
    ?.replaceAll("<p>", "<p class='text3 styled_list styled_link'>")
    ?.replaceAll("quoteBlock", "quoteBlock")
    ?.replaceAll(
      "<img",
      "<img class='rounded-[30px] max-h-[456px] object-cover w-full'"
    );

  const bodyItem = bodyText ? (
    <div
      className={`longread_body w-[948px]`}
      dangerouslySetInnerHTML={{ __html: bodyWithStyles }}
    />
  ) : (
    <div></div>
  );

  return (
    <Modal
      title="Предпросмотр"
      open={isOpen}
      onCancel={onClose}
      width={'100%'}
      footer={
        <>
          <Button onClick={onClose}>Закрыть</Button>
        </>
      }
    >
      <section className="">
        <div className="logread_wrapper bg-[var(--color-longread-grey)] p-5">
          {bodyItem}
        </div>
        <div className="absolute invisible before:content-[url('/factBlock/fact.svg')]" />
        <div className="absolute invisible before:content-[url('/quoteBlock/quote.svg')]" />
      </section>
    </Modal>
  );
};
