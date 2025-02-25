import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
    "https://t3.ftcdn.net/jpg/04/28/71/26/240_F_428712680_pTl1AvcwjrLJgV6MfD6BiInJPAZAMYE1.jpg",
    "https://images.pexels.com/photos/708848/pexels-photo-708848.jpeg",
    "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
    "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
    "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
    "https://images.pexels.com/photos/2280544/pexels-photo-2280544.jpeg",
    "https://t4.ftcdn.net/jpg/04/01/28/69/240_F_401286968_TQJgQz5NMkf24qAQHzvmzE1NWR1QWZqq.jpg",
    "https://t3.ftcdn.net/jpg/07/86/33/80/240_F_786338051_K0a7VaD3fxWGI0moq4rvENOmT4ELR2rD.jpg",
    "https://t4.ftcdn.net/jpg/07/74/03/73/240_F_774037335_atGFniwq7pTxsk3pFI0WVMzBnzGU5IVO.jpg",
    "https://t3.ftcdn.net/jpg/09/59/31/36/240_F_959313678_fHSJiAoVueeJFxIsjp9hRl5cwpiUyF24.jpg",
    "https://t4.ftcdn.net/jpg/11/20/21/13/240_F_1120211308_VItrSHzDS9i3TgdU2nyfdUFGkNtprOmz.jpg",
    "https://t3.ftcdn.net/jpg/11/74/82/48/240_F_1174824868_rpRvEWef8rMU34JBpeXZz9wlPobHmvNw.jpg",
    "https://t4.ftcdn.net/jpg/08/34/67/97/240_F_834679729_6M9eE6OH1gU31Bt1zVOJqhIfEPlFknfz.jpg",
    "https://t3.ftcdn.net/jpg/08/39/58/48/240_F_839584841_JJLYOu8gNdmmnRmMzWaumEwMOacQaM71.jpg",
    "https://t4.ftcdn.net/jpg/10/16/04/75/240_F_1016047597_hmeFuPBqDGcrVraI7EEN7X7NpCJ9fys9.jpg",
    "https://t4.ftcdn.net/jpg/07/77/45/07/240_F_777450763_XsZFnxWsOnypIe0z3FdpDddFDazYxTbn.jpg",
    "https://t3.ftcdn.net/jpg/12/23/42/46/240_F_1223424614_cCzXVKyXFLkZvKpcHO37KMhUZZMesAko.jpg",
    "https://t3.ftcdn.net/jpg/09/59/31/36/240_F_959313678_fHSJiAoVueeJFxIsjp9hRl5cwpiUyF24.jpg",
];

const GalleryPages: React.FC = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    return (
        <>
            <div
                className="relative  h-[320px] bg-cover bg-center flex items-center justify-center text-white bg-blue-400"
                style={{ backgroundImage: `url(${images[0]})` }}
            >
                <div className="absolute inset-0 bg-blue-950/90"></div>
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

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-center text-3xl font-bold text-blue-900 mb-8" data-aos="fade-up">
                    Our Gallery
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="overflow-hidden rounded-lg shadow-md"
                            whileHover={{ scale: 1.05 }}
                            data-aos="fade-up"
                        >
                            <img
                                src={image}
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
