import { RouterProvider } from "react-router";
import { router } from "./router/router.config";







export default function AppProvider() {
    return (
        <RouterProvider router={router} />
    )
}
