import { Table, Tag } from "antd";
import { useState } from "react";
import { ButtonAction } from "../../../../../components/ButtonGroup";
import { useNavigate } from "react-router";
import { PageTable } from "../../../../../components/Page";
import { useDeleteNasledie, useGetNasledie } from "../../../../../hooks/useNasledie";
import { categoryNasledie } from "../../../../../constants/constants";
import { TNasledie } from "../../../../../api/nasledie";

export const Nasledie = () => {
  const { isLoading, data } = useGetNasledie();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  const { mutate: deleteNasledie } =
    useDeleteNasledie();

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
    navigate("/main/region/nasledie/add", {
      state: { pageType: "add" },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/main/region/nasledie/edit/${id}`, {
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
      title: "Категория",
      dataIndex: "category",
      render: (category: string) => {
        return (
          <div className="max-w-80">
            <Tag>
              {categoryNasledie.find((item => item.value === category))?.label}
            </Tag>
          </div>
        );
      },
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
      title: "Действие",
      render: (row: TNasledie) => {
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
      title={"Наследие"}
      handleAdd={handleAdd}
      isOpenModalConfirmation={modalConfirmData.isOpen}
      onCloseModalConfirmation={onCloseModalConfirm}
      onConfirmModalConfirm={() =>
        deleteNasledie(modalConfirmData.deletedId)
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
