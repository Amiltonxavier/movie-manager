import { createBrowserRouter } from "react-router";
import AuthLayout from "../../app/page/auth/layout/Layout";
import SignIn from "../../app/page/auth/sign-in/sign-in";
import SignUp from "../../app/page/auth/sign-up/sign-up";
import Dashboard from "../../app/page/dashboard/dashboard";
import { Children } from "react";
import Layout from "../../app/page/layout/layout";
import MyMovie from "../../app/page/my-movies/my-movie";
import Details from "../../app/page/details/details";
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
            {
                path: "sign-up",
                element: <SignUp />
            }
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
                path: '/my-movies',
                element: <MyMovie />
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