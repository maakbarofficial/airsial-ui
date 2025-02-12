import { Link } from "react-router-dom";

const MenuTab = ({ icon, name, path, onClick }) => (
    <li>
        <Link to={path} onClick={onClick} className="menu-tab">
            {icon}
            <span className="ml-2">{name}</span>
        </Link>
    </li>
);

const Sidebar = ({ isOpen, closeSidebar }) => {
    const Menus = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/buttons",
            name: "Buttons",
        },
        {
            path: "/alerts",
            name: "Alerts",
        },
        {
            path: "/avatar",
            name: "Avatar",
        },
        {
            path: "/badge",
            name: "Badge",
        },
        {
            path: "/banner",
            name: "Banner",
        },
        {
            path: "/bottom-navigation",
            name: "Bottom Navigation",
        },
        {
            path: "/card",
            name: "Card",
        },
    ];

    return (
        <div
            className={`fixed lg:relative z-50 inset-0 h-full bg-gray-800 bg-opacity-75 transition-opacity overflow-y-scroll lg:bg-transparent ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                } lg:opacity-100 lg:pointer-events-auto`}
            onClick={closeSidebar}
        >
            <div
                className={`bg-white dark:bg-gray-800 w-52 h-full p-2 transform transition-transform shadow-2xl ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0`}
                onClick={(e) => e.stopPropagation()}
            >
                <nav>
                    <ul className="flex flex-col gap-2 ml-2">
                        {/* Map all menus */}
                        {Menus.map((menu) => (
                            <MenuTab
                                key={menu.name}
                                icon={menu.icon}
                                name={menu.name}
                                path={menu.path}
                                onClick={closeSidebar}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
