import { Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";

const AdmineLayout = () => {
    return (
        <div>
            <MainLayout/>
            <Outlet />
        </div>
    );
};

export default AdmineLayout;