import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import AirSialLogo from "../../assets/logo.png";

const Components = ({ toggleSidebar }) => {
    return (
        <div>
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <HiOutlineMenuAlt2 size={30} />
            </button>

            {/* Components */}
            <section className="bg-center h-[95vh] bg-no-repeat bg-[url('https://crc-airsial.vercel.app/assets/login-background-DOQ4F7EJ.jpeg')] bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <div className="mx-auto text-center flex items-center justify-center py-10">
                        <img src={AirSialLogo} className="w-[250px] z-10" alt="AirSial" />
                    </div>
                    <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        UI Components
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Explore the whole collection of over many open-source UI components
                        and interactive elements built for rapid frontend development of AirSial.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Components;
