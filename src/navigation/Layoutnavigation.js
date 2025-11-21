import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Layout from "../shared/Layout";

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
                    {/* <Route path="/set-password" element={<SetPassword authDetails={authDetails} />} />
                    <Route path="/forgot-password" element={<ForgotPassword authDetails={authDetails} />} /> */}

                    Protected layout routes
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Layout componentRoutes={componentRoutes} />
                            </PrivateRoute>
                        }
                    >
                        {componentRoutes?.map((route, idx) => (
                            <Route
                                key={idx}
                                path={route.path}
                                element={
                                    <PrivateRoute allowedRoles={route.roles}>
                                        <route.component authDetails={authDetails} />
                                    </PrivateRoute>
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
