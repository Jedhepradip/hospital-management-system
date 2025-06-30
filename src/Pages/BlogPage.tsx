// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";
// import { Tooltip } from "react-tooltip";
// import "aos/dist/aos.css";
// import AOS from "aos";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { Blog, FetchingBlogData } from "../Redux Toolkit/Features/Blog";
// import { useAppDispatch, RootState } from "../Redux Toolkit/Store/store";
// import { useSelector } from "react-redux";

// interface Article {
//     category: string;
//     date: string;
//     hospital: string;
//     title: string;
//     description: string;
//     imageUrl: string;
//     readMoreLink: string;
// }

// const categories = ["All", "Cardiology", "Gynecology", "Neurology", "Orthopedics", "Spine Injury", "Uncategorized", "Infectious", "Medical Breakthroughs", "Life Style"];

// const BlogPage: React.FC = () => {

//     const [selectedCategory, setSelectedCategory] = useState<string>("All");
//     const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

//     // Filter articles when category changes
//     useEffect(() => {
//         const filtered = selectedCategory === "All" ? articles : articles.filter(article => article.category === selectedCategory);
//         setFilteredArticles(filtered);
//     }, [selectedCategory, filteredArticles]);

//     const handleCategoryChange = (category: string) => {
//         setSelectedCategory(category);
//     };

//     useEffect(() => {
//         AOS.init({ duration: 1000, easing: "ease-in-out" });
//     }, []);

//     const [articles, SetAllBlog] = useState<Blog[]>([])
//     const dispatch = useAppDispatch();
//     const { AllBlog, loading } = useSelector((state: RootState) => state.Blog);


//     // console.log("AllBlog :",AllBlog);
    
//     useEffect(() => {
//         dispatch(FetchingBlogData())
//     }, [dispatch])

//     useEffect(() => {
//         if (AllBlog.length > 0) {
//             SetAllBlog(AllBlog)
//             setFilteredArticles(AllBlog)
//         }
//     }, [AllBlog])

//     return (
//         <>
//             <div
//                 className="relative h-[320px] bg-cover bg-center flex items-center justify-center text-white bg-blue-400"
//                 style={{ backgroundImage: "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
//             >
//                 <div className="absolute inset-0 bg-blue-950/90"></div>
//                 <div className="relative text-center z-10 py-16 px-4">
//                     <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-gray-200 drop-shadow-md">
//                         Welcome to Our Insights
//                     </h1>
//                     <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 text-white drop-shadow-lg">
//                         Explore Our Blog
//                     </h1>
//                     <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
//                         Stay updated with the latest trends, insights, and expert opinions in the industry.
//                         Our blog covers a wide range of topics to keep you informed and inspired.
//                     </p>
//                 </div>
//             </div>

//             <div className="p-6 min-h-screen">
//                 {/* Page Title with Animation */}
//                 <motion.h1
//                     className="text-4xl font-bold text-center mb-6 text-blue-900"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     Healthcare Articles
//                 </motion.h1>

//                 {/* Category Filter Buttons with Tooltip */}
//                 <div className="flex flex-wrap justify-center gap-4 mb-6">
//                     {categories.map((category) => (
//                         <motion.button
//                             key={category}
//                             onClick={() => handleCategoryChange(category)}
//                             className={`px-4 py-2 rounded-lg transition font-medium border border-blue-900
//                 ${selectedCategory === category ? "bg-blue-900 text-white" : "text-blue-900 hover:bg-blue-700 hover:text-white"}
//                 `}
//                             whileHover={{ scale: 1.1 }}
//                             data-tooltip-id={category}
//                         >
//                             {category}
//                         </motion.button>
//                     ))}
//                 </div>

//                 {/* Tooltips for each category */}
//                 {categories.map((category) => (
//                     <Tooltip id={category} place="top">
//                         Click to filter {category} articles
//                     </Tooltip>
//                 ))}

//                 {/* Articles Grid with AOS Scroll Animation */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16">
//                     {loading
//                         ? // Skeleton loaders while loading
//                         Array(6)
//                             .fill(null)
//                             .map((_, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="bg-white shadow-lg rounded-lg overflow-hidden"
//                                     data-aos="fade-up"
//                                 >
//                                     <Skeleton height={240} />
//                                     <div className="p-4">
//                                         <Skeleton height={24} width="80%" />
//                                         <Skeleton height={16} width="60%" className="mt-1" />
//                                         <Skeleton count={2} className="mt-2" />
//                                         <Skeleton height={40} width={120} className="mt-4" />
//                                     </div>
//                                 </motion.div>
//                             ))
//                         : // Actual data display
//                         filteredArticles?.map((article, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform"
//                                 whileHover={{ scale: 1.05 }}
//                                 transition={{ type: "spring", stiffness: 200 }}
//                                 data-aos="fade-up"
//                             >
//                                 {/* Article Image */}
//                                 <img
//                                     src={article.imageUrl}
//                                     alt={article.title}
//                                     className="w-full h-60 object-cover rounded-t-lg"
//                                 />

//                                 {/* Article Content */}
//                                 <div className="p-4">
//                                     <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
//                                     <p className="text-gray-600 text-sm mt-1">
//                                         {article.date} • {article.hospital}
//                                     </p>
//                                     <p className="text-gray-700 mt-2 leading-relaxed">
//                                         {article.description.substring(0, 120)}...
//                                     </p>

//                                     {/* Read More Button with Icon */}
//                                     <motion.button
//                                         className="mt-4 inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-700 py-2 px-4 rounded-lg text-white font-medium transition"
//                                         whileHover={{ scale: 1.1 }}
//                                     >
//                                         Read More <FaArrowRight />
//                                     </motion.button>
//                                 </div>
//                             </motion.div>
//                         ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BlogPage;


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaHospital, FaTag } from "react-icons/fa";
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.9 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.3 }
        },
        hover: { 
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Enhanced Hero Section */}
            <div className="relative overflow-hidden">
                <div
                    className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-white"
                    style={{ 
                        backgroundImage: "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
                    }}
                >
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-indigo-900/95"></div>
                    
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <motion.div 
                        className="relative text-center z-10 py-20 px-6 max-w-5xl mx-auto"
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 
                            className="text-lg sm:text-xl font-bold uppercase tracking-[0.2em] text-blue-200 drop-shadow-md mb-4"
                            initial={{ opacity: 0, letterSpacing: "0.1em" }}
                            animate={{ opacity: 1, letterSpacing: "0.2em" }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Welcome to Our Insights
                        </motion.h1>
                        
                        <motion.h1 
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200 drop-shadow-2xl mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Explore Our Blog
                        </motion.h1>
                        
                        <motion.p 
                            className="text-blue-100/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Stay updated with the latest trends, insights, and expert opinions in the industry.
                            Our blog covers a wide range of topics to keep you informed and inspired.
                        </motion.p>

                        {/* Animated decorative line */}
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-8 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16">
                {/* Page Title with Animation */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700 mb-4">
                        Healthcare Articles
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Enhanced Category Filter */}
                <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-6xl mx-auto">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`group relative px-6 py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 overflow-hidden
                                    ${selectedCategory === category 
                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25" 
                                        : "bg-white/80 backdrop-blur-sm text-blue-700 hover:text-white border-2 border-blue-200 hover:border-blue-500 shadow-md hover:shadow-lg"
                                    }`}
                                variants={buttonVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                transition={{ delay: index * 0.05 }}
                                data-tooltip-id={category}
                            >
                                {/* Background gradient on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-opacity duration-300 ${
                                    selectedCategory === category ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}></div>
                                
                                {/* Category icon */}
                                <span className="relative flex items-center gap-2">
                                    <FaTag className="text-xs" />
                                    {category}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Tooltips for each category */}
                {categories.map((category) => (
                    <Tooltip key={`tooltip-${category}`} id={category} place="top">
                        Click to filter {category} articles
                    </Tooltip>
                ))}

                {/* Enhanced Articles Grid */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={selectedCategory}
                    >
                        {loading
                            ? // Enhanced Skeleton loaders
                            Array(6)
                                .fill(null)
                                .map((_, index) => (
                                    <motion.div
                                        key={index}
                                        className="group bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl overflow-hidden border border-white/20"
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Skeleton height={280} className="rounded-t-3xl" />
                                        <div className="p-6">
                                            <Skeleton height={28} width="80%" className="mb-3" />
                                            <Skeleton height={20} width="60%" className="mb-4" />
                                            <Skeleton count={3} className="mb-4" />
                                            <Skeleton height={44} width={140} className="rounded-xl" />
                                        </div>
                                    </motion.div>
                                ))
                            : // Enhanced Article Cards
                            filteredArticles?.map((article, index) => (
                                <motion.div
                                    key={index}
                                    className="group bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 hover:-translate-y-2"
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{ 
                                        scale: 1.02,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                    }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Image Container with Overlay */}
                                    <div className="relative overflow-hidden">
                                        <motion.img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="w-full h-72 object-contain transition-transform duration-700 group-hover:scale-110"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.7 }}
                                        />
                                        
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Category badge */}
                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                            {article.category || "General"}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Title */}
                                        <motion.h2 
                                            className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {article.title}
                                        </motion.h2>
                                        
                                        {/* Meta information */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <FaCalendarAlt className="text-blue-500" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaHospital className="text-blue-500" />
                                                <span>{article.hospital}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                            {article.description.substring(0, 120)}...
                                        </p>

                                        {/* Enhanced Read More Button */}
                                        <motion.button
                                            className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-3 px-6 rounded-xl text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden"
                                            whileHover={{ 
                                                scale: 1.05,
                                                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {/* Button background animation */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                            
                                            <span className="relative">Read More</span>
                                            <motion.div
                                                className="relative"
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <FaArrowRight />
                                            </motion.div>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                    </motion.div>
                </AnimatePresence>

                {/* No Results Message */}
                {!loading && filteredArticles.length === 0 && (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-6xl mb-4">📝</div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No Articles Found</h3>
                        <p className="text-gray-500">Try selecting a different category to see more articles.</p>
                    </motion.div>
                )}
            </div>

            {/* Floating background elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-300/10 rounded-full blur-xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-indigo-300/10 rounded-full blur-xl"
                    animate={{
                        x: [0, -25, 0],
                        y: [0, 15, 0],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    );
};

export default BlogPage;