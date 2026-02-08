import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage/Home";
import AuthLayout from "../layouts/AuthLayout";
import Auth from "../pages/Authentication/Auth";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "signin",
                Component: Auth
            }
        ]
    }
]);
