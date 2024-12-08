import { Button, Table } from "antd";
import { useDeleteNewsArt, useGetNewsArt } from "../../../hooks/useNewsArt";
import { TNewsArt } from "../../../api/newsArt";
import { useState } from "react";
import { DrawerAdd } from "./components/DrawerAdd";
import { ModalView } from "./components/ModalView";
import { DrawerEdit } from "./components/DrawerEdit";
import { ModalConfirmation } from "../../../components/ModalConfirmation";
import { ButtonAction } from "../../../components/ButtonGroup";

export const NovostiArt = () => {
  const { isLoading, data } = useGetNewsArt();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  const { mutate: deleteNews } = useDeleteNewsArt();

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const [modalData, setModalData] = useState({ isOpen: false, openedId: -1 });

  const [editDrawerData, setEditDrawerData] = useState({
    isOpen: false,
    updateId: -1,
    unmound: true,
  });

  const [modalConfirmData, setModalConfirmData] = useState({
    isOpen: false,
    deletedId: -1,
  });

  const onOpen = () => {
    setIsOpenDrawer(true);
  };

  const onClose = () => {
    setIsOpenDrawer(false);
  };

  const onOpenEdit = (updateId: number) => {
    setEditDrawerData((prev) => ({
      ...prev,
      isOpen: true,
      updateId,
      unmound: false,
    }));
  };

  const onCloseEdit = () => {
    setEditDrawerData((prev) => ({ ...prev, isOpen: false, updateId: -1 }));
    setTimeout(() => {
      setEditDrawerData((prev) => ({ ...prev, unmound: true }));
    }, 1000);
  };

  const onOpenModal = (openedId: number) => {
    setModalData((prev) => ({ ...prev, isOpen: true, openedId }));
  };
  const onCloseModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false, openedId: -1 }));
  };

  const onOpenModalConfirm = (deletedId: number) => {
    setModalConfirmData((prev) => ({ ...prev, isOpen: true, deletedId }));
  };
  const onCloseModalConfirm = () => {
    setModalConfirmData((prev) => ({ ...prev, isOpen: false, deletedId: -1 }));
  };

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Дата",
      render: (row: TNewsArt) => {
        return (
          <div>
            {new Date(row.date).toLocaleString("ru-RU", {
              dateStyle: "short",
            })}
          </div>
        );
      },
    },
    {
      title: "Заголовок",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Действие",
      render: (row: TNewsArt) => {
        return (
          <ButtonAction
            onDelete={() => onOpenModalConfirm(row.id)}
            onEdit={() => onOpenEdit(row.id)}
            onView={() => onOpenModal(row.id)}
          />
        );
      },
    },
  ];

  return (
    <div className="grid gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Новости АРТ</h1>
        <Button size="large" type="primary" onClick={onOpen}>
          Добавить запись
        </Button>
      </div>
      <div className=" bg-slate-100 p-5">
        <Table
          dataSource={dataSource}
          columns={columns}
          loading={isLoading}
          pagination={{ pageSize: 50 }}
        />
      </div>
      <DrawerAdd open={isOpenDrawer} onClose={onClose} />
      {!editDrawerData.unmound && (
        <DrawerEdit
          open={editDrawerData.isOpen}
          onClose={onCloseEdit}
          updateId={editDrawerData.updateId}
        />
      )}
      <ModalView
        isOpen={modalData.isOpen}
        onClose={onCloseModal}
        viewNews={data?.rows.find((item) => item.id === modalData.openedId)}
      />
      <ModalConfirmation
        isOpen={modalConfirmData.isOpen}
        onClose={onCloseModalConfirm}
        onConfirm={() => deleteNews(modalConfirmData.deletedId)}
      />
    </div>
  );
};
