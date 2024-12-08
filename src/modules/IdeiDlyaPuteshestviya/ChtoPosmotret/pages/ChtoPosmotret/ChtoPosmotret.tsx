import { Button, Table, Tag } from "antd";
import { useState } from "react";
import { ModalConfirmation } from "../../../../../components/ModalConfirmation";
import {
  useGetChtoPosmotret,
  useDeleteChtoPosmotret,
} from "../../../../../hooks";
import { ButtonAction } from "../../../../../components/ButtonGroup";
import { useNavigate } from "react-router";
import { TChtoPosmotret } from "../../../../../api/chtoPosmotret";
import { tags } from "../../../../../constants/constants";

export const ChtoPosmotret = () => {
  const { isLoading, data } = useGetChtoPosmotret();

  const dataSource = data?.rows.map((item, index) => ({
    ...item,
    key: index + 1,
  }));

  const { mutate: deleteChtoPosmotret } = useDeleteChtoPosmotret();

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
    navigate("/main/idei-dlya-puteshestviya/chto-posmotret/add", {
      state: { pageType: "add" },
    });
  };

  const handleEdit = (id: number) => {
    navigate(`/main/idei-dlya-puteshestviya/chto-posmotret/edit/${id}`, {
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
      title: "Объект",
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
      render: (row: TChtoPosmotret) => {
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
      render: (row: TChtoPosmotret) => {
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
    <div className="grid gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Что посмотреть</h1>
        <Button size="large" type="primary" onClick={handleAdd}>
          Добавить объект
        </Button>
      </div>
      <div className="bg-slate-100 p-5">
        <Table
          dataSource={dataSource}
          columns={columns}
          loading={isLoading}
          pagination={{ pageSize: 50 }}
        />
      </div>
      <ModalConfirmation
        isOpen={modalConfirmData.isOpen}
        onClose={onCloseModalConfirm}
        onConfirm={() => deleteChtoPosmotret(modalConfirmData.deletedId)}
      />
    </div>
  );
};
