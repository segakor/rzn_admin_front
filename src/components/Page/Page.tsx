import { Spin, Typography } from "antd";
import { GoBackButton } from "../Buttons";
import { ReactNode } from "react";
import { dictTitle } from "./Page.constant";

export const Page = ({
  isLoading,
  children,
  type
}: {
  isLoading?: boolean;
  children: ReactNode;
  type: 'add' | 'edit'
}) => {
  if (isLoading) {
    return <Spin />;
  }

  return (
    <div className="grid gap-3">
      <div>
        <GoBackButton />
      </div>
      <Typography.Title className="mb-2" level={3}>
        {dictTitle[type]}
      </Typography.Title>
      {children}
    </div>
  );
};
