import { createBrowserRouter } from "react-router";
import AuthLayout from "../../app/page/auth/layout/Layout";
import SignIn from "../../app/page/auth/sign-in/sign-in";
import Dashboard from "../../app/page/dashboard/dashboard";
import Layout from "../../app/page/layout/layout";
import MovieDetails from "../../app/page/details/details";
import NewMovie from "../../app/page/new-movie/new-movie";

export const router = createBrowserRouter([
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "sign-in",
                element: <SignIn />
            },
        ],
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: '/new-movie',
                element: <NewMovie />
            }
        ]
    },
    {
        path: '/details/:id',
        element: <MovieDetails />
    }
]);