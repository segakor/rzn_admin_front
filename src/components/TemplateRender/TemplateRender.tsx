import { Button } from "antd";
import { TTemplate } from "../../types/types";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ElementItem } from "./ElementItem";
import { useState } from "react";

type Props = {
  template: TTemplate[];
};

export const TemplateRender = ({ template }: Props) => {
  const [data, setData] = useState(template);

  const handleDeleteItem = (index: number) => {
    const newData = [...data];
    const filteredData = newData.filter((_, itemIndex) => itemIndex !== index);
    setData(filteredData);
  };

  const handleDeleteChildItem = (parentIndex: number, childIndex: number) => {
    const newData = [...data];
    const filteredData = newData.map((item, itemIndex) => {
      const { subElements } = item;
      if (itemIndex !== parentIndex) {
        return item;
      }
      if (!subElements?.length) {
        return item;
      }
      const newSubElements = [...subElements];
      const filteredSubElements = newSubElements.filter(
        (_, itemIndex) => itemIndex !== childIndex
      );
      return { ...item, subElements: filteredSubElements };
    });
    setData(filteredData);
  };

  return (
    <div className="grid gap-2">
      {data.map((item, index) => {
        return (
          <ElementItem
            key={index}
            item={item}
            index={index}
            onDeleteItem={handleDeleteItem}
            onDeleteChildItem={handleDeleteChildItem}
          />
        );
      })}
      <Button
        type="primary"
        shape="circle"
        icon={<PlusCircleOutlined />}
        onClick={() => alert("add")}
      />
    </div>
  );
};
