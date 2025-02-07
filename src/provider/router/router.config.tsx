import { createBrowserRouter } from "react-router";
import AuthLayout from "../../app/page/auth/layout/Layout";
import SignIn from "../../app/page/auth/sign-in/sign-in";
import SignUp from "../../app/page/auth/sign-up/sign-up";
import Dashboard from "../../app/page/dashboard/dashboard";

export const router = createBrowserRouter([
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "sign-in",
                element: <SignIn />
            },
            {
                path: "sign-up",
                element: <SignUp />
            }
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
]);