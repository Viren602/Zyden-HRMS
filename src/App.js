import "./App.css";
import { useEffect } from "react";
import ComponentNavigation from "./navigation/ComponentNavigation";
import LayoutNavigation from "./navigation/Layoutnavigation";
import { getAuthProps } from "./utils/AuthenticationLibrary";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";

function App() {
  const authDetails = getAuthProps();
  const publicRoutes = ["/login", "/set-password", "/forgot-password"];

  useEffect(() => {
    const currentPath = window.location.pathname.toLowerCase();

    if (currentPath === "/") {
      window.location.href = "/login";
      return;
    }

    if (authDetails) {
      ComponentNavigation.forEach(el => el.authDetails = authDetails);
    } else if (!publicRoutes.includes(currentPath)) {
      window.location.href = "/login";
    }
  }, [authDetails]);

  return (
    <LayoutNavigation
      componentRoutes={ComponentNavigation}
      authDetails={authDetails}
    />
  );
}

export default App;
