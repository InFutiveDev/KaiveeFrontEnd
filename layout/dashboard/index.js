import LazyLoad from "react-lazyload";
import DashboardCard from "./dashboardCard";
import BreadCrumb from "components/breadcrumb";
const breadcrumblist = [{ name: "Home", path: "/" }];

const DashBoardLayout = () => {
  return (
    <LazyLoad>
      <div className="container py-[70px]">
        <BreadCrumb active="Dashboard" breadcrumblist={breadcrumblist} />
        <DashboardCard />
      </div>
    </LazyLoad>
  );
};

export default DashBoardLayout;
