import { Table, Tag } from "antd";
import { useState } from "react";
import { ButtonAction } from "../../../../../components/ButtonGroup";
import { useNavigate } from "react-router";
import { PageTable } from "../../../../../components/Page";
import {
  useDeleteOrganizovannyeMarshruty,
  useGetOrganizovannyeMarshruty,
} from "../../../../../hooks/useOrganizovannyeMarshruty";
import { TOrganizovannyeMarshruty } from "../../../../../api/organizovannyeMarshruty";

export const OrganizovannyeMarshruty = () => {
  const { isLoading, data } = useGetOrganizovannyeMarshruty();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  const { mutate: deleteSamostoyatelnyeMarshruty } =
    useDeleteOrganizovannyeMarshruty();

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
    navigate("/main/marshruty/organizovannye-marshruty/add", {
      state: { pageType: "add" },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/main/marshruty/organizovannye-marshruty/edit/${id}`, {
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
      title: "Даты",
      render: (row: TOrganizovannyeMarshruty) => {
        return (
          <div className="max-w-80">
            {row.dates.map((value, index) => (
              <Tag key={index}>{value}</Tag>
            ))}
          </div>
        );
      },
    },
    {
      title: "Действие",
      render: (row: TOrganizovannyeMarshruty) => {
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
      title={"Организованные маршруты"}
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
