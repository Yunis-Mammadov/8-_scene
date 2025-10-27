import { FaUserAlt, FaTrophy } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Navbar() {
    return (
        <nav style={{
            // backgroundColor: "#19183B"
            backgroundColor: "#18173d"
            // backgroundColor: "#17313E"
            // background: "#FCB53B"
        }}
            className="dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-screen-xl mx-auto flex justify-between sm:justify-around items-center p-4">

                <div className="flex items-center gap-3 sm:gap-4 md:gap-4 text-gray-700 dark:text-gray-300">
                    <button className="hover:text-yellow-500 transition-colors text-white text-lg sm:text-2xl cursor-pointer">
                        {/* <FaUserAlt size={20} /> */}
                        Login
                    </button>
                    <button className="hover:text-yellow-500 transition-colors text-white cursor-pointer">
                        <FaTrophy
                            // size={25}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        />
                    </button>
                </div>

                <a href="/" className="flex items-center justify-center">
                    <img
                        src="/8.5_logo.png"
                        alt="8½ Scene Logo"
                        className="h-12 md:h-14"
                    // className="h-12 md:h-14 bg-amber-400"
                    />
                </a>

                <div className="flex items-center gap-4 text-gray-700 text-white">
                    <a
                        href="#"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="Twitter"
                    >
                        <FaXTwitter
                            // size={25}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        />
                    </a>
                    <a
                        href="#"
                        className="hover:text-pink-500 transition-colors"
                        aria-label="Instagram"
                    >
                        <FaInstagram
                            // size={25}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        />
                    </a>
                    <a
                        href="#"
                        className="hover:text-red-600 transition-colors"
                        aria-label="YouTube"
                    >
                        <FaYoutube
                            // size={25}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                        />
                    </a>
                </div>

            </div>
        </nav>
    );
}
