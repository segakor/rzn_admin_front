import { Switch, Table } from "antd";
import { useState } from "react";
import { ButtonAction } from "../../../../../components/ButtonGroup";
import { useNavigate } from "react-router";
import { PageTable } from "../../../../../components/Page";
import { TGid } from "../../../../../api/gid";
import { useDeleteGid, useGetGid } from "../../../../../hooks/useGid";

export const Gid = () => {
  const { isLoading, data } = useGetGid();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  const { mutate: deleteGid } = useDeleteGid();

  const [modalConfirmData, setModalConfirmData] = useState({
    isOpen: false,
    deletedId: -1,
  });

  const onOpenModalConfirm = (deletedId: number) => {
    setModalConfirmData((prev) => ({ ...prev, isOpen: true, deletedId }));
  };
  const onCloseModalConfirm = () => {
    setModalConfirmData((prev) => ({ ...prev, isOpen: false, deletedId: -1 }));
  };

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/main/marshruty/gid/add", {
      state: { pageType: "add" },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/main/marshruty/gid/edit/${id}`, {
      state: { pageType: "edit" },
    });
  };

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "ФИО",
      dataIndex: "fio",
    },
    {
      title: "Активен",
      dataIndex: "isActive",
      render: (value: boolean) => {
        return <Switch value={value} disabled />;
      },
    },
    {
      title: "Действие",
      render: (row: TGid) => {
        return (
          <ButtonAction
            onDelete={() => onOpenModalConfirm(row.id)}
            onEdit={() => handleEdit(row.id)}
            onView={() => console.log("onView")}
          />
        );
      },
    },
  ];

  return (
    <PageTable
      title={"Гиды"}
      handleAdd={handleAdd}
      isOpenModalConfirmation={modalConfirmData.isOpen}
      onCloseModalConfirmation={onCloseModalConfirm}
      onConfirmModalConfirm={() => deleteGid(modalConfirmData.deletedId)}
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        pagination={{ pageSize: 50 }}
      />
    </PageTable>
  );
};
