import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = ({ toggleSidebar, isSidebarOpen, closeSidebar }) => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1">
                <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
                <main className="flex-1 overflow-y-auto p-4 bg-[#F7F7F7] dark:bg-[#110E0E] text-slate-600 dark:text-slate-300">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;