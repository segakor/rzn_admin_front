import { notification, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { ButtonAction } from "../../../../../components/ButtonGroup";
import { useNavigate } from "react-router";
import { useDeleteAnswer, useGetAnswer } from "../../../../../hooks";
import { TAnswer } from "../../../../../api/answers";
import { PageTable } from "../../../../../components/Page";

export const OtvetyNaVoprosy = () => {
  const { isLoading, data, isError } = useGetAnswer();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "Не удалось загрузить данные",
        duration: 10,
      });
    }
  }, [isError]);

  const { mutate: deleteAnswer } = useDeleteAnswer();

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
    navigate("/main/ty-s-mestnym/otvety-na-voprosy/add", {
      state: { pageType: "add" },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/main/ty-s-mestnym/otvety-na-voprosy/edit/${id}`, {
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
      title: "Вопрос",
      dataIndex: "title",
    },
    {
      title: "Категория",
      dataIndex: "category",
      render: (category: string) => {
        return <Tag>{category}</Tag>;
      },
    },
    {
      title: "Действие",
      render: (row: TAnswer) => {
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
      title={"Ответы на вопросы"}
      handleAdd={handleAdd}
      isOpenModalConfirmation={modalConfirmData.isOpen}
      onCloseModalConfirmation={onCloseModalConfirm}
      onConfirmModalConfirm={() => deleteAnswer(modalConfirmData.deletedId)}
    >
      <Table dataSource={dataSource} columns={columns} loading={isLoading} />
    </PageTable>
  );
};
