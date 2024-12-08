import { Table, Tag } from "antd";
import { useState } from "react";
import {
  useDeleteSamostoyatelnyeMarshruty,
  useGetSamostoyatelnyeMarshruty,
} from "../../../../../hooks";
import { ButtonAction } from "../../../../../components/ButtonGroup";
import { useNavigate } from "react-router";
import { tags } from "../../../../../constants/constants";
import { TSamostoyatelnyeMarshruty } from "../../../../../api/samostoyatelnyeMarshruty";
import { PageTable } from "../../../../../components/Page";

export const SamostoyatelnyeMarshruty = () => {
  const { isLoading, data } = useGetSamostoyatelnyeMarshruty();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  const { mutate: deleteSamostoyatelnyeMarshruty } =
    useDeleteSamostoyatelnyeMarshruty();

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
    navigate("/main/marshruty/samostoyatelnye-marshruty/add", {
      state: { pageType: "add" },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/main/marshruty/samostoyatelnye-marshruty/edit/${id}`, {
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
      title: "Описание",
      dataIndex: "subTitle",
    },
    {
      title: "Категория",
      dataIndex: "category",
      render: (category: string) => {
        return <Tag>{category}</Tag>;
      },
    },
    {
      title: "Тэги",
      render: (row: TSamostoyatelnyeMarshruty) => {
        return (
          <div className="max-w-80">
            {row.tags.map((value, index) => (
              <Tag key={index}>
                {tags.find((item) => item.value === value)?.label}
              </Tag>
            ))}
          </div>
        );
      },
    },
    {
      title: "Действие",
      render: (row: TSamostoyatelnyeMarshruty) => {
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
      title={"Самостоятельные маршруты"}
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
