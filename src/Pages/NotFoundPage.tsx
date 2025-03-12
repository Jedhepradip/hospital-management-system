import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-purple-600 dark:text-purple-500 lg:text-9xl">
                    404
                </h1>
                <p className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                    Something's missing.
                </p>
                <p className="mb-6 text-lg text-gray-500 dark:text-gray-400">
                    Sorry, we can't find that page. You'll find lots to explore on the home page.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md text-lg transition-all duration-300"
                >
                    Back to Homepage
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
