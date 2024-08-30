/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "antd";
import { useState } from "react";
import { TTemplate } from "../../../types/types";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import { ElementItemBody } from "./components/ElementItemBody";
import { CardTitle } from "./components/CardTitle";
import { SubElementItem } from "./SubElementItem";

type PropsElementItem = {
  item: TTemplate;
  isChild?: boolean;
  index: number;
  onDeleteItem: (index: number) => void;
  onDeleteChildItem: (parentIndex: number, childIndex: number) => void;
};

export const ElementItem = ({
  item,
  index,
  onDeleteItem,
  onDeleteChildItem,
}: PropsElementItem) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDelete = () => {
    onDeleteItem(index);
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <Card
      title={
        <CardTitle
          title={item.element as any}
          onDelete={handleDelete}
          onEdit={handleEdit}
          isEdit={isEdit}
        />
      }
      bordered={true}
      extra={
        <b className="cursor-pointer" onClick={handleOpen}>
          {!isOpen ? <CaretDownFilled /> : <CaretUpFilled />}
        </b>
      }
      className="bg-slate-200"
    >
      {isOpen && (
        <div>
          <ElementItemBody item={item} isEdit={isEdit} />
          <div className="grid gap-3">
            {item.subElements?.map((itemSub, indexSub) => {
              return (
                <SubElementItem
                  item={itemSub}
                  key={index}
                  index={indexSub}
                  onDeleteChildItem={onDeleteChildItem}
                  parentIndex={index}
                />
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
};
