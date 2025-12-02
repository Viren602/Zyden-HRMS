import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getAuthProps } from "../../utils/AuthenticationLibrary";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from "@fortawesome/react-fontawesome";
import {
  faBarcode,
  faBoxesStacked,
  faCalendar,
  faCartShopping,
  faChartLine,
  faClipboardList,
  faCubes,
  faFileCirclePlus,
  faFileInvoice,
  faFileInvoiceDollar,
  faFolderOpen,
  faGauge,
  faGear,
  faHistory,
  faList,
  faMap,
  faMapMarkedAlt,
  faMars,
  faMoneyBillWave,
  faPalette,
  faPen,
  faReceipt,
  faRuler,
  faShop,
  faTags,
  faTasks,
  faThLarge,
  faTicket,
  faUser,
  faUserCircle,
  faUsers,
  faVenusMars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FaUsers } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const authDetails = getAuthProps();

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(false);
    }
  };


  return (
    <div
      className={`sidebar p-2.5 lg:border-r border-[#0000001f] bg-white max-lg:absolute top-[71.4] max-lg:z-10 max-lg:shadow-lg overflow-hidden overflow-y-auto duration-300 ${sidebarOpen ? "md:w-[240px] w-full left-0" : "lg:w-[79px] w-0 -left-1/2"
        }`}
      style={{ height: "calc(100vh - 71.4px)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ------------------- / LOGO SECTION ------------------- */}
      <div className="flex items-center justify-start h-[60px] transition-all duration-300">
        {sidebarOpen ? (
          <img
            src="/Zyden-logo.png"
            className="h-[40px] w-auto transition-all duration-300"
            alt="Large Logo"
          />
        ) : (
          <img
            src="/logo192.png"
            className="h-[30px] w-auto transition-all duration-300 px-[7px]"
            alt="Small Logo"
          />
        )}
      </div>

      <div className="flex flex-col gap-[15px] ">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `
      sidebar-link no-underline flex items-center 
      transition w-full text-blue rounded-[10px] px-[10px] py-[10px]
      ${sidebarOpen ? "gap-[15px]" : "gap-[0px]"}
      ${isActive ? "bg-lightblue" : "hover:bg-lightblue"}
    `
          }
        >
          <span>
            <FontAwesomeIcon icon={faGauge} />
          </span>
          <span
            className={`sidebar-text text-[14px] font-medium ${sidebarOpen ? "open" : "closed"
              }`}
          >
            Dashboard
          </span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `
      sidebar-link no-underline flex items-center 
      transition w-full text-blue rounded-[10px] px-[10px] py-[10px]
      ${sidebarOpen ? "gap-[15px]" : "gap-[0px]"}
      ${isActive ? "bg-lightblue" : "hover:bg-lightblue"}
    `
          }
        >
          <span>
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          <span
            className={`sidebar-text text-[14px] font-medium ${sidebarOpen ? "open" : "closed"
              }`}
          >
            Calender
          </span>
        </NavLink>

        <NavLink
          to="/clients"
          className={({ isActive }) =>
            `
      sidebar-link no-underline flex items-center 
      transition w-full text-blue rounded-[10px] px-[10px] py-[10px]
      ${sidebarOpen ? "gap-[15px]" : "gap-[0px]"}
      ${isActive ? "bg-lightblue" : "hover:bg-lightblue"}
    `
          }
        >
          <span>
            <FontAwesomeIcon icon={faUsers} />
          </span>
          <span
            className={`sidebar-text text-[14px] font-medium ${sidebarOpen ? "open" : "closed"
              }`}
          >
            Clients
          </span>
        </NavLink>

        <NavLink
          to="/project "
          className={({ isActive }) =>
            `
      sidebar-link no-underline flex items-center 
      transition w-full text-blue rounded-[10px] px-[10px] py-[10px]
      ${sidebarOpen ? "gap-[15px]" : "gap-[0px]"}
      ${isActive ? "bg-lightblue" : "hover:bg-lightblue"}
    `
          }
        >
          <span>
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span
            className={`sidebar-text text-[14px] font-medium ${sidebarOpen ? "open" : "closed"
              }`}
          >
            Project
          </span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `
      sidebar-link no-underline flex items-center 
      transition w-full text-blue rounded-[10px] px-[10px] py-[10px]
      ${sidebarOpen ? "gap-[15px]" : "gap-[0px]"}
      ${isActive ? "bg-lightblue" : "hover:bg-lightblue"}
    `
          }
        >
          <span>
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
          <span
            className={`sidebar-text text-[14px] font-medium ${sidebarOpen ? "open" : "closed"
              }`}
          >
            Profile
          </span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `
      sidebar-link no-underline flex items-center 
      transition w-full text-blue rounded-[10px] px-[10px] py-[10px]
      ${sidebarOpen ? "gap-[15px]" : "gap-[0px]"}
      ${isActive ? "bg-lightblue" : "hover:bg-lightblue"}
    `
          }
        >
          <span>
            <FontAwesomeIcon icon={faTasks} />
          </span>
          <span
            className={`sidebar-text text-[14px] font-medium ${sidebarOpen ? "open" : "closed"
              }`}
          >
            Task
          </span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `
      sidebar-link no-underline flex items-center 
      transition w-full text-blue rounded-[10px] px-[10px] py-[10px]
      ${sidebarOpen ? "gap-[15px]" : "gap-[0px]"}
      ${isActive ? "bg-lightblue" : "hover:bg-lightblue"}
    `
          }
        >
          <span>
            <FontAwesomeIcon icon={faFileInvoice} />
          </span>
          <span
            className={`sidebar-text text-[14px] font-medium ${sidebarOpen ? "open" : "closed"
              }`}
          >
            Invoice
          </span>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `
      sidebar-link no-underline flex items-center 
      transition w-full text-blue rounded-[10px] px-[10px] py-[10px]
      ${sidebarOpen ? "gap-[15px]" : "gap-[0px]"}
      ${isActive ? "bg-lightblue" : "hover:bg-lightblue"}
    `
          }
        >
          <span>
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </span>
          <span
            className={`sidebar-text text-[14px] font-medium ${sidebarOpen ? "open" : "closed"
              }`}
          >
            Expenses
          </span>
        </NavLink>

        <NavLink
          to="/employee"
          className={({ isActive }) =>
            `
      sidebar-link no-underline flex items-center 
      transition w-full text-blue rounded-[10px] px-[10px] py-[10px]
      ${sidebarOpen ? "gap-[15px]" : "gap-[0px]"}
      ${isActive ? "bg-lightblue" : "hover:bg-lightblue"}
    `
          }
        >
          <span>
            <FontAwesomeIcon icon={faMoneyBillWave} />
          </span>
          <span
            className={`sidebar-text text-[14px] font-medium ${sidebarOpen ? "open" : "closed"
              }`}
          >
            Employee
          </span>
        </NavLink>
      </div>
      <div className="w-full flex justify-center mb-5">
        <button className="bg-gray-200 rounded-full w-[120px] py-2 text-center text-[14px] font-medium cursor-pointer hover:bg-gray-300 duration-200">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
