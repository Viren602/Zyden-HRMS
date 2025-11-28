import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Layout from "../shared/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import ForgotPassword from "../pages/authentication/ForgotPassword";
import Sidebar from "../shared/sidebar/Sidebar";
import Clients from "../pages/clients/Clients";
import Project from "../pages/project/Project";
import { Calendar } from "lucide-react";
import Calender from "../pages/calender/Calender";
import EmployeeList from "../pages/employees/EmployeeList";
import EmployeeDetails from "../pages/employees/EmployeeDetails";
import Task from "../pages/task/Task";
import Invoice from "../pages/invoice/Invoice";
import Expenses from "../pages/expenses/Expenses";
import InvoiceDetails from "../pages/invoice/InvoiceDetails";
 
const LayoutNavigation = ({ authDetails, componentRoutes }) => {
 
    const PrivateRoute = ({ children, allowedRoles }) => {
        if (!authDetails?.roleId) {
            return <Navigate to="/login" replace />;
        }
        if (allowedRoles && !allowedRoles.includes(authDetails.roleId)) {
            return <Navigate to="/unauthorized" replace />;
        }
        return children;
    };
 
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Public routes */}
                    <Route path="/login" element={<Login authDetails={authDetails} />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                    <Route path="/personal-information" element={<EmployeeDetails />} />
                    <Route path="/task" element={<Task />} />
                    <Route path="/invice" element={<Invoice />} />
                    <Route path="/invice-detail" element={<InvoiceDetails />} />
                    <Route path="expense" element={<Expenses />} />
                    <Route path="/forgot-password" element={<ForgotPassword authDetails={authDetails} />} />
                    <Route path="/sidebar" element={<Sidebar authDetails={authDetails} />} />
                    <Route path="/calender" element={<Calender authDetails={authDetails} />} />
 
                    Protected layout routes
                    <Route
                        path="/"
                        element={
                            // <PrivateRoute>
                                <Layout componentRoutes={componentRoutes} />
                            // </PrivateRoute>
                        }
                    >
                        {componentRoutes?.map((route, idx) => (
                            <Route
                                key={idx}
                                path={route.path}
                                element={
                                    // <PrivateRoute allowedRoles={route.roles}>
                                        <route.component authDetails={authDetails} />
                                    // </PrivateRoute>
                                }
                            />
                        ))}
                    </Route>
 
                    {/* Fallback route */}
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Suspense>
        </Router>
    );
};
 
export default LayoutNavigation;