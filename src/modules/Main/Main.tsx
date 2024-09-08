import { LayoutComponent } from "../../components/LayoutComponent";
import { IdeiDlyaPuteshestviyaRoutes } from "../IdeiDlyaPuteshestviya/IdeiDlyaPuteshestviyaRoutes";
import { KontaktyRoutes } from "../Kontakty/KontaktyRoutes";
import { MarshrutyRoutes } from "../Marshruty/MarshrutyRoutes";
import { ProfessionalamRoutes } from "../Professionalam/ProfessionalamRoutes";
import { RegionRoutes } from "../Region/RegionRoutes";
import { TySMestnymRoutes } from "../TySMestnym/TySMestnymRoutes";
import { MainRoutes } from "./MainRoutes";

export const Main = () => {
  return (
    <LayoutComponent>
      <MainRoutes />
      <RegionRoutes />
      <IdeiDlyaPuteshestviyaRoutes />
      <TySMestnymRoutes />
      <MarshrutyRoutes />
      <ProfessionalamRoutes />
      <KontaktyRoutes />
    </LayoutComponent>
  );
};
