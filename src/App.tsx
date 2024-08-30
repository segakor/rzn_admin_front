import { AppRoutes } from "./route";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ConfigProvider } from "antd";
import { QueryClientProvider } from "./components/QueryClientProvider";

export const App = () => {
  return (
    <ConfigProvider
    /* theme={{
        token: {
          // Seed Token
          colorPrimary: "#00B96B",
          borderRadius: 8,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
      }} */
    >
      <ErrorBoundary>
        <QueryClientProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </ErrorBoundary>
    </ConfigProvider>
  );
};
