import { QueryClientProvider as QCP } from "@tanstack/react-query";
import { ReactElement, ReactNode, useState } from "react";
import { generateNewClient } from "../../config/queryClient";

interface IQueryClientProviderProps {
  children: ReactNode;
}

export const QueryClientProvider = ({
  children,
}: IQueryClientProviderProps): ReactElement => {
  const [queryClient] = useState(generateNewClient);
  return <QCP client={queryClient}>{children}</QCP>;
};
