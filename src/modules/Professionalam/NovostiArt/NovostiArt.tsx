import { Button, Table } from "antd";
import { useDeleteNewsArt, useGetNewsArt } from "../../../hooks/useNews";
import { TNewsArt } from "../../../api/news";
import { ButtonAction } from "./components/ButtonAction";
import { useState } from "react";
import { DrawerAdd } from "./components/DrawerAdd";

export const NovostiArt = () => {
  const { isLoading, data } = useGetNewsArt();

  const { mutate } = useDeleteNewsArt();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      width: "5%",
    },
    {
      title: "Заголовок",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Текст",
      dataIndex: "bodyText",
      key: "bodyText",
      width: "50%",
      ellipsis: true,
      render: (record: string) => {
        return (
          <div
            className="whitespace-pre-line h-[150px] overflow-auto"
            dangerouslySetInnerHTML={{ __html: record }}
          />
        );
      },
    },
    { title: "Дата", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "Действие",
      render: (row: TNewsArt) => {
        return (
          <ButtonAction onDelete={() => mutate(row.id)} onEdit={showDrawer} />
        );
      },
    },
  ];

  return (
    <div className="grid gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Новости АРТ</h1>
        <Button size="large" type="primary" onClick={showDrawer}>
          Добавить запись
        </Button>
      </div>
      <div className=" bg-slate-100 p-5">
        <Table dataSource={data?.rows} columns={columns} loading={isLoading} />
      </div>
      <DrawerAdd open={open} onClose={onClose} />
    </div>
  );
};
