import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export const NovostyRegiona = () => {
  return (
    <div className="grid gap-3">
      <h1 className="text-lg">Новости региона</h1>
      <div className=" bg-slate-100 p-5">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};
