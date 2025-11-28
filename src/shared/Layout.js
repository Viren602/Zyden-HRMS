import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Breadcrumb from "./breadcrumbTitle/Breadcrumb";

const Layout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className="h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="project-pages">
          <Header setSidebarOpen={setSidebarOpen} />
          <div
            className="pagescreen relative flex-1 overflow-hidden overflow-y-auto w-full pt-[15px]"
            style={{ height: "calc(100vh - 10px)" }}
          >
            {/* <Breadcrumb componentRoutes={props.componentRoutes} /> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
