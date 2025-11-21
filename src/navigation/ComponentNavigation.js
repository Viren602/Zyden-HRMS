import Login from "../pages/authentication/Login";
import Dashboard from "../pages/dashboard/Dashboard";

const ComponentNavigation = [
  {
    path: "login",
    title: "Login",
    component: Login,
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

];
export default ComponentNavigation;
