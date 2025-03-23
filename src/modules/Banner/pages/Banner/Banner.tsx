import { Switch, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDeleteBanner, useGetBanner } from "../../../../hooks/useBanner";
import { ButtonAction } from "../../../../components/ButtonGroup";
import { TBanner } from "../../../../api/banner";
import { PageTable } from "../../../../components/Page";

export const Banner = () => {
  const { isLoading, data } = useGetBanner();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  const { mutate: deleteSamostoyatelnyeMarshruty } =
    useDeleteBanner();

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
    navigate("/main/banner/add", {
      state: { pageType: "add" },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/main/banner/edit/${id}`, {
      state: { pageType: "edit" },
    });
  };

  const columns = [{
    title: "sequence",
    dataIndex: "sequence",
    width: "5%",
  },
  {
    title: "Заголовок",
    dataIndex: "title",
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
    render: (row: TBanner) => {
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
      title={"Баннеры"}
      handleAdd={handleAdd}
      isOpenModalConfirmation={modalConfirmData.isOpen}
      onCloseModalConfirmation={onCloseModalConfirm}
      onConfirmModalConfirm={() =>
        deleteSamostoyatelnyeMarshruty(modalConfirmData.deletedId)
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
