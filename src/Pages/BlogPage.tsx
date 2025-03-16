import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "aos/dist/aos.css";
import AOS from "aos";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Blog, FetchingBlogData } from "../Redux Toolkit/Features/Blog";
import { useAppDispatch, RootState } from "../Redux Toolkit/Store/store";
import { useSelector } from "react-redux";

interface Article {
    category: string;
    date: string;
    hospital: string;
    title: string;
    description: string;
    imageUrl: string;
    readMoreLink: string;
}

const categories = ["All", "Cardiology", "Gynecology", "Neurology", "Orthopedics", "Spine Injury", "Uncategorized", "Infectious", "Medical Breakthroughs", "Life Style"];

const BlogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

    // Filter articles when category changes
    useEffect(() => {
        const filtered = selectedCategory === "All" ? articles : articles.filter(article => article.category === selectedCategory);
        setFilteredArticles(filtered);
    }, [selectedCategory, filteredArticles]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    const [articles, SetAllBlog] = useState<Blog[]>([])
    const dispatch = useAppDispatch();
    const { AllBlog, loading } = useSelector((state: RootState) => state.Blog);

    useEffect(() => {
        dispatch(FetchingBlogData())
    }, [dispatch])

    useEffect(() => {
        if (AllBlog.length > 0) {
            SetAllBlog(AllBlog)
            setFilteredArticles(AllBlog)
        }
    }, [AllBlog])

    return (
        <>
            <div
                className="relative h-[320px] bg-cover bg-center flex items-center justify-center text-white bg-blue-400"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
            >
                <div className="absolute inset-0 bg-blue-950/90"></div>
                <div className="relative text-center z-10 py-16 px-4">
                    <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-gray-200 drop-shadow-md">
                        Welcome to Our Insights
                    </h1>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 text-white drop-shadow-lg">
                        Explore Our Blog
                    </h1>
                    <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Stay updated with the latest trends, insights, and expert opinions in the industry.
                        Our blog covers a wide range of topics to keep you informed and inspired.
                    </p>
                </div>
            </div>

            <div className="p-6 min-h-screen">
                {/* Page Title with Animation */}
                <motion.h1
                    className="text-4xl font-bold text-center mb-6 text-blue-900"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Healthcare Articles
                </motion.h1>

                {/* Category Filter Buttons with Tooltip */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 rounded-lg transition font-medium border border-blue-900
                ${selectedCategory === category ? "bg-blue-900 text-white" : "text-blue-900 hover:bg-blue-700 hover:text-white"}
                `}
                            whileHover={{ scale: 1.1 }}
                            data-tooltip-id={category}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Tooltips for each category */}
                {categories.map((category) => (
                    <Tooltip id={category} place="top">
                        Click to filter {category} articles
                    </Tooltip>
                ))}

                {/* Articles Grid with AOS Scroll Animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16">
                    {loading
                        ? // Skeleton loaders while loading
                        Array(6)
                            .fill(null)
                            .map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                                    data-aos="fade-up"
                                >
                                    <Skeleton height={240} />
                                    <div className="p-4">
                                        <Skeleton height={24} width="80%" />
                                        <Skeleton height={16} width="60%" className="mt-1" />
                                        <Skeleton count={2} className="mt-2" />
                                        <Skeleton height={40} width={120} className="mt-4" />
                                    </div>
                                </motion.div>
                            ))
                        : // Actual data display
                        filteredArticles?.map((article, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                data-aos="fade-up"
                            >
                                {/* Article Image */}
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="w-full h-60 object-cover rounded-t-lg"
                                />

                                {/* Article Content */}
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {article.date} • {article.hospital}
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        {article.description.substring(0, 120)}...
                                    </p>

                                    {/* Read More Button with Icon */}
                                    <motion.button
                                        className="mt-4 inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-700 py-2 px-4 rounded-lg text-white font-medium transition"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        Read More <FaArrowRight />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default BlogPage;