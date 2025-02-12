import { Link } from "react-router-dom";
import AirSialLogo from "../../assets/Airsial.gif";

const Home = () => {
    return (
        <div className="bg-white h-screen dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <a
                    href="https://github.com/maakbarofficial/airsial-ui"
                    className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 bg-blue-100 rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
                >
                    <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 me-3">
                        New
                    </span>{" "}
                    <span className="text-sm font-medium">
                        Checkout AirSial UI GitHub
                    </span>
                    <svg
                        className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                </a>
                <div className="mx-auto text-center flex items-center justify-center">
                    <img src={AirSialLogo} className="w-[250px] z-10" alt="AirSial" />
                </div>
                <h1 className="mb-4 text-4xl font-medium tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    AirSial <span className="text-green-900 font-extrabold">UI</span>
                </h1>
                <p className="mb-8 text-xl font-medium text-black lg:text-xl sm:px-16 lg:px-48 dark:text-white">
                    "Crafting Interfaces That Take Flight" ✈️
                </p>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                    A set of beautifully-designed, accessible, and customizable components
                    library for{" "}
                    <span className="text-green-900 font-extrabold">AirSial</span>.
                </p>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                    AirSial UI is more than just a component library—it’s your gateway to
                    crafting stunning, seamless, and highly customizable user interfaces.
                    Whether you prefer the precision of{" "}
                    <span className="text-green-900 font-extrabold">TailwindCSS</span>,
                    the familiarity of{" "}
                    <span className="text-green-900 font-extrabold">Bootstrap</span>, or
                    the flexibility of{" "}
                    <span className="text-green-900 font-extrabold">
                        Vanilla/Pure CSS
                    </span>
                    , AirSial UI adapts to your design vision effortlessly.
                </p>
                <Link
                    to={"/components"}
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
                >
                    Get started
                    <svg
                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </Link>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0" />
        </div>
    );
};

export default Home;
