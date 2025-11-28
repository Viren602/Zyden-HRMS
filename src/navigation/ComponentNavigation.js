import { Calendar } from "lucide-react";
import ForgotPassword from "../pages/authentication/ForgotPassword";
import Login from "../pages/authentication/Login";
import Clients from "../pages/clients/Clients";
import Dashboard from "../pages/dashboard/Dashboard";
import Project from "../pages/project/Project";
import Calender from "../pages/calender/Calender";
import EmployeeList from "../pages/employees/EmployeeList";
import EmployeeDetails from "../pages/employees/EmployeeDetails";
import Task from "../pages/task/Task";
import Invoice from "../pages/invoice/Invoice";
import Expenses from "../pages/expenses/Expenses";
import InvoiceDetails from "../pages/invoice/InvoiceDetails";
import Hsn from "../pages/invoice/Hsn";

const ComponentNavigation = [
  {
    path: "login",
    title: "Login",
    component: Login,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "forgot-password",
    title: "Forgot Password",
    component: ForgotPassword,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "dashboard",
    title: "Dashboard",
    component: Dashboard,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "clients",
    title: "Clients",
    component: Clients,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "project",
    title: "Project",
    component: Project,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "calender",
    title: "Calender",
    component: Calender,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "employee-list",
    title: "Employee",
    component: EmployeeList,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "employee-detail",
    title: "Employee Detail",
    component: EmployeeDetails,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "task",
    title: "Task",
    component: Task,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "invoice",
    title: "Invoice",
    component: Invoice,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "invoice-detail",
    title: "Invoice Details",
    component: InvoiceDetails,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "expense",
    title: "Expense",
    component: Expenses,
    hasParams: false,
    roles: [1, 2],
  },
  {
    path: "hsn",
    title: "Hsn",
    component: Hsn,
    hasParams: false,
    roles: [1, 2],
  },
];
export default ComponentNavigation;
