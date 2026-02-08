
import { Outlet } from "react-router";


const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 ">
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;