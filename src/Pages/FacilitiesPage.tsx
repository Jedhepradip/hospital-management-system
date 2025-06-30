// import React, { useState, useEffect } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
// import { AllFacility, DetchinAllFacility } from "../Redux Toolkit/Features/All-Facility";
// import { useAppDispatch, RootState } from "../Redux Toolkit/Store/store";
// import { useSelector } from "react-redux";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const FacilitiesPage: React.FC = () => {

//     const [Faciltiy, SetAllFacility] = useState<AllFacility[]>([])
//     const dispatch = useAppDispatch();
//     const { AllFacility, loading } = useSelector((state: RootState) => state.AllFacility);

//     console.log("AllFacility :",AllFacility);

//     useEffect(() => {
//         dispatch(DetchinAllFacility())
//     }, [dispatch])

//     useEffect(() => {
//         if (AllFacility.length > 0) {
//             SetAllFacility(AllFacility)
//         }
//     }, [AllFacility])

//     console.log(Faciltiy);


//     const cardVariants = {
//         hidden: { opacity: 0, scale: 0.9, y: 30 },
//         visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
//     };

//     return (
//         <div className="container mx-auto px-1 py-5 z-10">
//             {/* Header Section */}
//             <div
//                 className="relative h-[320px] bg-cover bg-center flex items-center justify-center text-white bg-blue-400"
//                 style={{
//                     backgroundImage:
//                         "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
//                 }}
//             >
//                 <div className="absolute inset-0 bg-blue-950/90 z-0"></div>
//                 <div className="relative text-center z-10 py-16 px-4">
//                     <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-gray-200 drop-shadow-md">
//                         Discover Our Specialties
//                     </h1>
//                     <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 text-white drop-shadow-lg">
//                         Explore Our Expertise
//                     </h1>
//                     <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
//                         Learn more about our specialized services and medical expertise. We offer comprehensive care tailored to meet the unique needs of every patient.
//                     </p>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:px-32 gap-6 md:p-7 p-3 py-5">
//                 {loading ? (
//                     // Skeleton Loader while loading
//                     Array.from({ length: 4 }).map((_, index) => (
//                         <motion.div
//                             key={index}
//                             className="bg-white pb-10 md:p-2 shadow-lg rounded-lg"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <Skeleton height={288} className="w-full rounded-md" />
//                             <Skeleton width="70%" height={24} className="mt-4" />
//                             <Skeleton count={3} className="mt-2" />
//                         </motion.div>
//                     ))
//                 ) : (
//                     // Actual Facility Data
//                     Faciltiy.map((service, index) => (
//                         <motion.div
//                             key={index}
//                             className="bg-white pb-10 md:p-2 shadow-lg rounded-lg"
//                             variants={cardVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, amount: 0.2 }}
//                         >
//                             <motion.img
//                                 src={service?.image}
//                                 alt={service?.title}
//                                 className="w-full h-72 object-cover rounded-md"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ duration: 0.7 }}
//                             />
//                             <h3 className="text-xl font-semibold mt-4">{service?.title}</h3>
//                             <ul className="list-disc list-inside mt-2">
//                                 {service?.description.map((point, idx) => (
//                                     <li key={idx} className="text-gray-600">{point}</li>
//                                 ))}
//                             </ul>
//                         </motion.div>
//                     ))
//                 )}
//             </div>
//         </div>

//     );
// };

// export default FacilitiesPage;



import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { AllFacility, DetchinAllFacility } from "../Redux Toolkit/Features/All-Facility";
import { useAppDispatch, RootState } from "../Redux Toolkit/Store/store";
import { useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FacilitiesPage: React.FC = () => {
    const [Faciltiy, SetAllFacility] = useState<AllFacility[]>([])
    const dispatch = useAppDispatch();
    const { AllFacility, loading } = useSelector((state: RootState) => state.AllFacility);

    console.log("AllFacility :", AllFacility);

    useEffect(() => {
        dispatch(DetchinAllFacility())
    }, [dispatch])

    useEffect(() => {
        if (AllFacility.length > 0) {
            SetAllFacility(AllFacility)
        }
    }, [AllFacility])

    console.log(Faciltiy);

    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 60,
            rotateX: 15
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
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

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.3
            }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Enhanced Header Section */}
            <div className="relative overflow-hidden">
                <div
                    className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                    }}
                >
                    {/* Enhanced overlay with gradient */}
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
                        className="relative text-center z-10 py-20 px-6 max-w-4xl mx-auto"
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
                            Discover Our Specialties
                        </motion.h1>

                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200 drop-shadow-2xl mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Explore Our Expertise
                        </motion.h1>

                        <motion.p
                            className="text-blue-100/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
                            variants={textVariants}
                        >
                            Learn more about our specialized services and medical expertise. We offer comprehensive care tailored to meet the unique needs of every patient.
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

            {/* Enhanced Content Section */}
            <motion.div
                className="container mx-auto px-4 py-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 lg:gap-12">
                    {loading ? (
                        // Enhanced Skeleton Loader
                        Array.from({ length: 4 }).map((_, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="p-6">
                                    <Skeleton height={320} className="w-full rounded-2xl mb-6" />
                                    <Skeleton width="70%" height={28} className="mb-4" />
                                    <Skeleton count={3} className="mb-2" />
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        // Enhanced Facility Cards
                        Faciltiy.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:-translate-y-2"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                }}
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-600/0 group-hover:from-blue-500/10 group-hover:to-indigo-600/10 transition-all duration-500 z-10"></div>

                                {/* Image Container */}
                                <div className="relative overflow-hidden rounded-t-3xl">
                                    <motion.img
                                        src={service?.image}
                                        alt={service?.title}
                                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                        variants={imageVariants}
                                        initial="hidden"
                                        animate="visible"
                                    />

                                    {/* Image overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Content */}
                                <div className="relative p-8 z-20">
                                    <motion.h3
                                        className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-blue-700 transition-colors duration-300"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {service?.title}
                                    </motion.h3>

                                    <motion.ul
                                        className="space-y-3"
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.1,
                                                    delayChildren: 0.3
                                                }
                                            }
                                        }}
                                    >
                                        {service?.description.map((point, idx) => (
                                            <motion.li
                                                key={idx}
                                                className="flex items-start space-x-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                                                variants={listItemVariants}
                                            >
                                                <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300"></span>
                                                <span className="leading-relaxed">{point}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        ))
                    )}
                </div>
            </motion.div>

            {/* Enhanced floating background elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"
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
                    className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-indigo-300/20 rounded-full blur-xl"
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

export default FacilitiesPage;