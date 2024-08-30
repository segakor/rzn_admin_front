/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { TTemplate } from "../../../types/types";
import { Card } from "antd";
import { ElementItemBody } from "./components/ElementItemBody";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import { CardTitle } from "./components/CardTitle";

type PropsChildElementItem = {
  item: TTemplate;
  parentIndex: number;
  index: number;
  onDeleteChildItem: (parentIndex: number, childIndex: number) => void;
};

export const SubElementItem = ({
  item,
  onDeleteChildItem,
  index,
  parentIndex,
}: PropsChildElementItem) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDelete = () => {
    onDeleteChildItem(parentIndex, index);
  };

  return (
    <Card
      title={<CardTitle title={item.element as any} onDelete={handleDelete} />}
      extra={
        <b className="cursor-pointer" onClick={handleOpen}>
          {!isOpen ? <CaretDownFilled /> : <CaretUpFilled />}
        </b>
      }
      className="bg-slate-100"
    >
      {isOpen && <ElementItemBody item={item} />}
    </Card>
  );
};
