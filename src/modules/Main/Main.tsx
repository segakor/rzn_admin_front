import { LayoutComponent } from "../../components/LayoutComponent";
import { IdeiDlyaPuteshestviyaRoutes } from "../IdeiDlyaPuteshestviya/IdeiDlyaPuteshestviyaRoutes";
import { KontaktyRoutes } from "../Kontakty/KontaktyRoutes";
import { MarshrutyRoutes } from "../Marshruty/MarshrutyRoutes";
import { ProfessionalamRoutes } from "../Professionalam/ProfessionalamRoutes";
import { RegionRoutes } from "../Region/RegionRoutes";
import { TySMestnymRoutes } from "../TySMestnym/TySMestnymRoutes";
import { MainRoutes } from "./MainRoutes";
import { useLocation } from "react-router";
import { useCheckAuth } from "../../hooks";
import { ProjectRoutes } from "../Projects/ProjectsRoutes";
import { BannerRoutes } from "../Banner/BannerRoutes";

export const Main = () => {
  const location = useLocation();

  useCheckAuth(location.pathname);

  return (
    <LayoutComponent>
      <MainRoutes />
      <RegionRoutes />
      <IdeiDlyaPuteshestviyaRoutes />
      <TySMestnymRoutes />
      <MarshrutyRoutes />
      <ProfessionalamRoutes />
      <KontaktyRoutes />
      <BannerRoutes />
      <ProjectRoutes />
    </LayoutComponent>
  );
};
