import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

interface Service {
    title: string;
    description: string[];
    image: string;
}


const images = [
    "https://media.istockphoto.com/id/1404179486/photo/anesthetist-working-in-operating-theatre-wearing-protecive-gear-checking-monitors-while.jpg?s=612x612&w=0&k=20&c=gecZ0b-nDIuMOvRIt8Qyam-eSx6RBdUzn5yDh0nNEvM=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcv_zwITMUd5b9CDGen3sc6X4a6mgJf8UaYSNhHXKEdJMS-dqk8Q0_gsHWW7v_Niq7EM&usqp=CAU",
    "https://media.istockphoto.com/id/1364075546/photo/empty-corridor-in-modern-hospital-with-information-counter-and-hospital-bed-in-rooms-3d.jpg?s=612x612&w=0&k=20&c=xxFDmIVpH1wJaaiorpvfzec4RRggSb48PDb_dU9bTjo=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iQNJG1ZbbU6sBlgE8Bymps5IVbTMNZ18Wg&s"
];

const services: Service[] = [
    {
        title: "ICU",
        description: [
            "15 beds critical care unit",
            "Equipped with high-end state-of-the-art equipment like ventilators, monitors, etc.",
            "24 x 7 physician and critical care specialist",
            "Utmost care to bedridden and critical patients",
        ],
        image: "https://www.sparshhealth.com/wp-content/uploads/2022/01/1.-ICU.jpg.webp",
    },
    {
        title: "NICU",
        description: [
            "4 beds Neonatal Intensive Care Unit",
            "High-end equipment for the delicate ones",
            "Paediatrician and neonatologist available",
            "Ventilator/breathing support for newborns with fine-tuned respiratory support",
        ],
        image: "https://www.sparshhealth.com/wp-content/uploads/2022/01/2.-NICU.jpg.webp",
    },
    {
        title: "Operation Theatres",
        description: [
            "Modern operation theatres with laminar airflow system",
            "Provides clean air, reducing chances of infection",
            "High-end equipment to enhance surgical precision",
            "Best operating microscopes for neurosurgery, microvascular, and ENT surgery",
        ],
        image: "https://www.sparshhealth.com/wp-content/uploads/2022/01/3.-Operation-theatres.jpg.webp",
    },
    {
        title: "Diagnostics Wing",
        description: [
            "MRI – 1.5 Tesla: Coming soon",
            "CT Scan, Computerized X-ray, 4D Ultrasound",
            "Cath Lab – Detects and treats heart blockages",
            "Pathology Lab with modern equipment covering most tests",
        ],
        image: "https://5.imimg.com/data5/SELLER/Default/2022/6/KE/LX/AW/77728348/img-e2282-500x500.JPG",
    },
    {
        title: "Dialysis Unit",
        description: [
            "Advanced dialysis centre with 6 beds",
            "3 beds in intensive care for critical patients",
            "Under the care of a nephrologist",
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVXNSIqI_6DRdRa2yVdGeOcSDphpyIvo2eHadDQZCCw3y38uciNmd7QOzAz-8BqkOjbY&usqp=CAU",
    },
    {
        title: "Neuro Microscope",
        description: [
            "One of the best microscopes in Pune",
            "Improves patient outcomes for brain tumors, microvascular repairs, and ENT surgeries",
            "Prevents damage to surrounding delicate brain tissue and nerves",
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFMynpPW6g34qxh44uId5rAjBnnAm_QxNtMDLQvY5gO_EqRjyfjeapo88jDaRcmHTMoI&usqp=CAU",
    },
    {
        title: "Physiotherapy",
        description: [
            "Fully equipped physiotherapy department",
            "Postoperative recovery, chronic back pain, and joint pain treatments",
            "Specialized services for sports injuries and athletes",
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6lzyqTz8G_pF19oXpC6xpQqL08t5SSHJm6RLb0iHAgroCQ0Q38d7sKF7JLP9AhnGm0l0&usqp=CAU",
    },
    {
        title: "Health Check and Wellness Centre",
        description: [
            "Comprehensive health check plans designed according to age group and gender",
            "Guide and combos of pathology tests and diagnostics for specific age groups",
            "Customisation and offers for corporates and senior citizens",
        ],
        image: "https://www.sparshhealth.com/wp-content/uploads/2021/12/1.-ICU-1.jpg.webp",
    },
    {
        title: "Suites and Rooms",
        description: [
            "With a view of mountains and forest surrounded by clouds!",
            "Modern facilities including refrigerator, air conditioner, television, Wi-Fi, and lockers",
            "Emergency call buttons in the bathroom and bedside",
            "Standard accessories including oxygen/suction for patient care",
        ],
        image: "https://www.sparshhealth.com/wp-content/uploads/2022/01/6.-Suites-and-Rooms.jpg.webp",
    },
    {
        title: "Mother and Child Care",
        description: [
            "Special care under supervision of specialists",
            "In-house Paediatrician and Gynaecologist for both simple and complicated pregnancies",
        ],
        image: "https://www.sparshhealth.com/wp-content/uploads/2022/01/13.-Mother-and-child-care.jpg.webp",
    },
];

const FacilitiesPage: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl font-extrabold text-center text-blue-600 mb-8"
            >
                Explore Our World-Class Medical Facilities
            </motion.h2>
            <div className="mb-20">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg mx-2">
                            <img
                                src={image}
                                alt={`Facility ${index + 1}`}
                                className="w-full md:h-[350px] object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:px-32 gap-6 p-7">
                {services.map((service, index) => (
                    <div key={index} className="bg-white pb-10 p-2">
                        <img src={service.image} alt={service.title} className="w-full h-72 object-cover " />
                        <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                        <ul className="list-disc list-inside mt-2">
                            {service.description.map((point, idx) => (
                                <li key={idx} className="text-gray-600">{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacilitiesPage;


