import { Table } from "antd";
import { useState } from "react";
import { PageTable } from "../../../../../../components/Page";
import { useDeleteBibliotekaPoslushat, useGetBibliotekaPoslushat } from "../../../../../../hooks/useBibliotekaPoslushat";
import { useNavigate } from "react-router";
import { ButtonAction } from "../../../../../../components/ButtonGroup";
import { TBibliotekaPoslushat } from "../../../../../../api/biblioteka";


export const Poslushat = () => {
  const { isLoading, data } = useGetBibliotekaPoslushat();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  const { mutate: deletePoslushat } =
    useDeleteBibliotekaPoslushat();

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
    navigate("/main/projects/biblioteka/poslushat/add", {
      state: { pageType: "add" },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/main/projects/biblioteka/poslushat/edit/${id}`, {
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
      title: "Заголовок",
      dataIndex: "title",
    },
    {
      title: "Действие",
      render: (row: TBibliotekaPoslushat) => {
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
      title={"Послушать"}
      handleAdd={handleAdd}
      isOpenModalConfirmation={modalConfirmData.isOpen}
      onCloseModalConfirmation={onCloseModalConfirm}
      onConfirmModalConfirm={() =>
        deletePoslushat(modalConfirmData.deletedId)
      }
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
