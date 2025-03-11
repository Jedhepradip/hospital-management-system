import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FetchinGalleryAllData, Gallery } from "../Redux Toolkit/Features/gallery";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Redux Toolkit/Store/store";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GalleryPages: React.FC = () => {
    const [images, setImages] = useState<Gallery[]>([]);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    const dispatch = useAppDispatch();
    const { AllGallery, loading } = useSelector((state: RootState) => state.gallery);

    useEffect(() => {
        dispatch(FetchinGalleryAllData())
    }, [dispatch])

    useEffect(() => {
        if (AllGallery.length > 0) {
            setImages(AllGallery)
        }
    }, [AllGallery])

    return (
        <>
            <div
                className="relative  h-[320px] bg-cover bg-center flex items-center justify-center text-white bg-blue-400"
                style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/08/39/58/48/240_F_839584841_JJLYOu8gNdmmnRmMzWaumEwMOacQaM71.jpg)` }}
            >
                <div className="absolute inset-0 bg-blue-950/80"></div>
                <div className="relative text-center z-10 py-16 px-4">
                    <motion.h1
                        className="text-lg sm:text-xl font-bold uppercase tracking-wide text-gray-200 drop-shadow-md"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Welcome to Our Insights
                    </motion.h1>
                    <motion.h1
                        className="text-4xl sm:text-5xl font-extrabold mt-2 text-white drop-shadow-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Explore Our Gallery
                    </motion.h1>
                    <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Discover amazing moments captured in our healthcare journey.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <h2 className="text-center text-3xl font-bold text-blue-900 mb-8" data-aos="fade-up">
                    Our Gallery
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {loading
                        ? Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-md">
                                <Skeleton height={256} className="w-full rounded-lg" />
                            </div>
                        ))
                        : images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="overflow-hidden rounded-lg shadow-md"
                                whileHover={{ scale: 1.05 }}
                                data-aos="fade-up"
                            >
                                <img
                                    src={image.GalleryImg}
                                    alt={`Gallery ${index}`}
                                    className="w-full h-64 object-cover rounded-lg hover:opacity-80 transition duration-300"
                                />
                            </motion.div>
                        ))}
                </div>
            </div>
        </>
    );
};
export default GalleryPages;