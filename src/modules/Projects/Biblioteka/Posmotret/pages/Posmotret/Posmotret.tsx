import { Table } from "antd";
import { useState } from "react";
import { PageTable } from "../../../../../../components/Page";
import { useDeleteBibliotekaPosmotret, useGetBibliotekaPosmotret } from "../../../../../../hooks/useBibliotekaPosmotret";
import { useNavigate } from "react-router";
import { ButtonAction } from "../../../../../../components/ButtonGroup";
import { TBibliotekaPosmotret } from "../../../../../../api/biblioteka";


export const Posmotret = () => {
  const { isLoading, data } = useGetBibliotekaPosmotret();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  const { mutate: deletePosmotret } =
    useDeleteBibliotekaPosmotret();

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
    navigate("/main/projects/biblioteka/posmotret/add", {
      state: { pageType: "add" },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/main/projects/biblioteka/posmotret/edit/${id}`, {
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
      render: (row: TBibliotekaPosmotret) => {
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
      title={"Посмотреть"}
      handleAdd={handleAdd}
      isOpenModalConfirmation={modalConfirmData.isOpen}
      onCloseModalConfirmation={onCloseModalConfirm}
      onConfirmModalConfirm={() =>
        deletePosmotret(modalConfirmData.deletedId)
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
