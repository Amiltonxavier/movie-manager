import { createBrowserRouter } from "react-router";
import AuthLayout from "../../app/page/auth/layout/Layout";
import SignIn from "../../app/page/auth/sign-in/sign-in";
import Dashboard from "../../app/page/dashboard/dashboard";
import Layout from "../../app/page/layout/layout";
import MovieDetails from "../../app/page/details/details";
import NewMovie from "../../app/page/new-movie/new-movie";
import { CONSTANT } from "../../CONSTANTS/constants";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: CONSTANT.ROUTES.PUBLIC.AUTH,
                element: <SignIn />
            },
        ],
    },
    {
        path: CONSTANT.ROUTES.BASE,
        element: <Layout />, 
        children: [
            {
                path: CONSTANT.ROUTES.PRIVATE.HOME,
                element: <Dashboard />
            },
            {
                path: CONSTANT.ROUTES.PRIVATE.NEW_MOVIE,
                element: <NewMovie />
            }
        ]
    },
    {
        path: CONSTANT.ROUTES.PRIVATE.MOVIE_DETAILS,
        element: <MovieDetails />
    }
]);
