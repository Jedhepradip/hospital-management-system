import React, { useEffect, useState } from "react";
import Cardiology1 from "../assets/Blog images/Blog1.webp"
import Cardiology2 from "../assets/Blog images/Cardiology2.jpeg"
import Neurology1 from "../assets/Blog images/Neurology1.jpeg"
import Orthopedics1 from "../assets/Blog images/Orthopedics1.jpeg"
import SpineInjury1 from "../assets/Blog images/SpineInjury1.jpeg"
import InfectiousInsights1 from "../assets/Blog images/InfectiousInsights1.jpeg"
import Lifestyle1 from "../assets/Blog images/Lifestyle1.jpeg"
import Uncategorized1 from "../assets/Blog images/Uncategorized1.webp"
import Cardiology3 from "../assets/Blog images/Cardiology1.jpeg"
import Gynecology1 from "../assets/Blog images/Gynecology1.jpeg"
import Neurology2 from "../assets/Blog images/Neurology2.jpeg"
import Orthopedics2 from "../assets/Blog images/Orthopedics2.jpeg"
import SpineInjury2 from "../assets/Blog images/SpineInjury2.jpeg"
import InfectiousInsights2 from "../assets/Blog images/InfectiousInsights2.jpeg"
import Lifestyle2 from "../assets/Blog images/Lifestyle2.jpeg"
import Oncology1 from "../assets/Blog images/Oncology1.jpeg"
import Pediatrics1 from "../assets/Blog images/Pediatrics1.jpeg"
import Dermatology1 from "../assets/Blog images/Dermatology1.jpeg"
import Endocrinology1 from "../assets/Blog images/Endocrinology1.jpeg"
import Nephrology1 from "../assets/Blog images/Nephrology1.jpeg"
import Urology1 from "../assets/Blog images/Urology1.jpeg"
import { motion } from "framer-motion";
import MedicalBreakthroughs1 from "../assets/Blog images/MedicalBreakthroughs1.jpeg"
import MedicalBreakthroughs2 from "../assets/Blog images/Medical2Breakthroughs.jpeg"

import { FaArrowRight } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "aos/dist/aos.css";
import AOS from "aos";


interface Article {
    category: string;
    date: string;
    hospital: string;
    title: string;
    description: string;
    imageUrl: string;
    readMoreLink: string;
}

const articles: Article[] = [
    {
        category: "Cardiology",
        date: "July 15, 2024",
        hospital: "HeartCare Hospital",
        title: "Understanding Heart Diseases and Treatment Options",
        description: `Heart disease remains a leading cause of mortality worldwide. At HeartCare Hospital, we specialize in diagnosing and treating cardiovascular conditions such as coronary artery disease, heart failure, and arrhythmias. Our expert cardiologists use advanced techniques like angioplasty, bypass surgery, and cardiac rehabilitation programs to enhance patient outcomes. With state-of-the-art facilities and personalized care plans, we aim to provide patients with the best possible treatment for their heart health.`,
        imageUrl: Cardiology1,
        readMoreLink: "https://example.com/cardiology-treatment"
    },
    {
        category: "Gynecology",
        date: "August 5, 2024",
        hospital: "Women’s Health Center",
        title: "Comprehensive Care for Women's Health",
        description: `Women’s Health Center is dedicated to providing top-notch gynecological services, including prenatal care, infertility treatments, and menopause management. Our team of skilled gynecologists and obstetricians focuses on personalized treatments for conditions like PCOS, endometriosis, and fibroids. We utilize minimally invasive surgical techniques to ensure a faster recovery process and improved patient comfort.`,
        imageUrl: Cardiology2,
        readMoreLink: "https://example.com/gynecology-care"
    },
    {
        category: "Neurology",
        date: "June 10, 2024",
        hospital: "Sparsh Hospital",
        title: "What Are the Treatments for Neurological Disorders?",
        description: `Sparsh Hospital, recognized as one of the Best Neurology Hospitals in Pune, specializes in treating a diverse range of neurological disorders affecting the nervous system, including the brain, spinal cord, and peripheral nerves. Neurological disorders encompass conditions such as epilepsy, Parkinson’s disease, multiple sclerosis, and stroke. At Sparsh Hospital, treatments are tailored to each patient’s needs and may include medications, physical therapy, and advanced surgical interventions such as deep brain stimulation.`,
        imageUrl: Neurology1,
        readMoreLink: "https://example.com/neurology-treatment"
    },
    {
        category: "Orthopedics",
        date: "September 12, 2024",
        hospital: "BoneCare Hospital",
        title: "Latest Advancements in Orthopedic Surgery",
        description: `BoneCare Hospital offers specialized care for musculoskeletal conditions, including fractures, arthritis, and sports injuries. Our orthopedic team excels in joint replacement surgeries, spinal procedures, and minimally invasive techniques. With a focus on faster recovery and enhanced mobility, our hospital provides the best orthopedic treatments using the latest innovations in medical technology.`,
        imageUrl: Orthopedics1,
        readMoreLink: "https://example.com/orthopedics-treatment"
    },
    {
        category: "Spine Injury",
        date: "October 20, 2024",
        hospital: "Spine Wellness Center",
        title: "Recovery and Rehabilitation for Spinal Injuries",
        description: `Spinal injuries can be life-altering, requiring comprehensive rehabilitation programs. Spine Wellness Center offers specialized treatments for spinal cord injuries, herniated discs, and scoliosis. Our team of neurosurgeons and physiotherapists focuses on pain management, non-surgical therapies, and surgical interventions to help patients regain mobility and lead a pain-free life.`,
        imageUrl: SpineInjury1,
        readMoreLink: "https://example.com/spine-treatment"
    },
    {
        category: "Infectious",
        date: "November 1, 2024",
        hospital: "Global Health Institute",
        title: "Fighting Infectious Diseases with Advanced Medicine",
        description: `The Global Health Institute specializes in diagnosing and treating infectious diseases such as COVID-19, tuberculosis, and hepatitis. Our team works on preventive measures, vaccinations, and innovative antiviral therapies to combat the spread of infections. With advanced diagnostic tools and treatment protocols, we aim to provide effective healthcare solutions for infectious diseases.`,
        imageUrl: InfectiousInsights1,
        readMoreLink: "https://example.com/infectious-diseases"
    },
    {
        category: "Life Style",
        date: "December 5, 2024",
        hospital: "Wellness & Nutrition Center",
        title: "Healthy Lifestyle Choices for a Better Tomorrow",
        description: `A healthy lifestyle plays a crucial role in preventing chronic diseases. At the Wellness & Nutrition Center, our experts provide personalized guidance on nutrition, exercise, and stress management. With customized diet plans, fitness programs, and mindfulness practices, we help individuals achieve optimal health and wellness.`,
        imageUrl: Lifestyle1,
        readMoreLink: "https://example.com/lifestyle-tips"
    },
    {
        category: "Uncategorized",
        date: "January 10, 2025",
        hospital: "Medical Research Institute",
        title: "Exploring New Frontiers in Medical Science",
        description: `The Medical Research Institute is at the forefront of pioneering new treatments and medical advancements. Our research spans various specialties, including regenerative medicine, personalized healthcare, and artificial intelligence in diagnostics. Through clinical trials and collaborations, we aim to bring innovative solutions to the healthcare industry.`,
        imageUrl: Uncategorized1,
        readMoreLink: "https://example.com/medical-research"
    },
    {
        category: "Cardiology",
        date: "July 15, 2024",
        hospital: "HeartCare Hospital",
        title: "Understanding Heart Diseases and Treatment Options",
        description: `Heart disease remains a leading cause of mortality worldwide. At HeartCare Hospital, we specialize in diagnosing and treating cardiovascular conditions such as coronary artery disease, heart failure, and arrhythmias. Our expert cardiologists use advanced techniques like angioplasty, bypass surgery, and cardiac rehabilitation programs to enhance patient outcomes.`,
        imageUrl: Cardiology3,
        readMoreLink: "https://example.com/cardiology-treatment"
    },
    {
        category: "Gynecology",
        date: "August 5, 2024",
        hospital: "Women’s Health Center",
        title: "Comprehensive Care for Women's Health",
        description: `Women’s Health Center is dedicated to providing top-notch gynecological services, including prenatal care, infertility treatments, and menopause management. Our team of skilled gynecologists and obstetricians focuses on personalized treatments for conditions like PCOS, endometriosis, and fibroids.`,
        imageUrl: Gynecology1,
        readMoreLink: "https://example.com/gynecology-care"
    },
    {
        category: "Neurology",
        date: "June 10, 2024",
        hospital: "Sparsh Hospital",
        title: "What Are the Treatments for Neurological Disorders?",
        description: `Sparsh Hospital, recognized as one of the Best Neurology Hospitals in Pune, specializes in treating a diverse range of neurological disorders affecting the nervous system, including the brain, spinal cord, and peripheral nerves. Treatments may include medications, therapy, and advanced surgical interventions.`,
        imageUrl: Neurology2,
        readMoreLink: "https://example.com/neurology-treatment"
    },
    {
        category: "Orthopedics",
        date: "September 12, 2024",
        hospital: "BoneCare Hospital",
        title: "Latest Advancements in Orthopedic Surgery",
        description: `BoneCare Hospital offers specialized care for musculoskeletal conditions, including fractures, arthritis, and sports injuries. Our orthopedic team excels in joint replacement surgeries, spinal procedures, and minimally invasive techniques.`,
        imageUrl: Orthopedics2,
        readMoreLink: "https://example.com/orthopedics-treatment"
    },
    {
        category: "Spine Injury",
        date: "October 20, 2024",
        hospital: "Spine Wellness Center",
        title: "Recovery and Rehabilitation for Spinal Injuries",
        description: `Spine Wellness Center offers specialized treatments for spinal cord injuries, herniated discs, and scoliosis. Our team of neurosurgeons and physiotherapists focuses on pain management, non-surgical therapies, and surgical interventions to help patients regain mobility.`,
        imageUrl: SpineInjury2,
        readMoreLink: "https://example.com/spine-treatment"
    },
    {
        category: "Infectious",
        date: "November 1, 2024",
        hospital: "Global Health Institute",
        title: "Fighting Infectious Diseases with Advanced Medicine",
        description: `The Global Health Institute specializes in diagnosing and treating infectious diseases such as COVID-19, tuberculosis, and hepatitis. Our team works on preventive measures, vaccinations, and innovative antiviral therapies.`,
        imageUrl: InfectiousInsights2,
        readMoreLink: "https://example.com/infectious-diseases"
    },
    {
        category: "Life Style",
        date: "December 5, 2024",
        hospital: "Wellness & Nutrition Center",
        title: "Healthy Lifestyle Choices for a Better Tomorrow",
        description: `A healthy lifestyle plays a crucial role in preventing chronic diseases. At the Wellness & Nutrition Center, our experts provide personalized guidance on nutrition, exercise, and stress management.`,
        imageUrl: Lifestyle2,
        readMoreLink: "https://example.com/lifestyle-tips"
    },
    {
        category: "Oncology",
        date: "January 15, 2025",
        hospital: "Cancer Treatment Center",
        title: "Advancements in Cancer Treatments and Therapies",
        description: `Our hospital provides cutting-edge cancer treatments, including immunotherapy, targeted therapies, and minimally invasive surgeries. We focus on personalized cancer care to improve patient survival and quality of life.`,
        imageUrl: Oncology1,
        readMoreLink: "https://example.com/oncology-treatments"
    },
    {
        category: "Pediatrics",
        date: "February 10, 2025",
        hospital: "Children’s Hospital",
        title: "Comprehensive Pediatric Care for Your Child’s Health",
        description: `From newborn care to adolescent health, our pediatric specialists provide top-notch care. We offer immunizations, nutritional counseling, and treatments for childhood diseases and developmental disorders.`,
        imageUrl: Pediatrics1,
        readMoreLink: "https://example.com/pediatrics-care"
    },
    {
        category: "Dermatology",
        date: "March 20, 2025",
        hospital: "Skin Health Center",
        title: "Effective Treatments for Skin Disorders",
        description: `From acne and eczema to advanced cosmetic dermatology, our team specializes in diagnosing and treating various skin conditions using modern dermatological procedures.`,
        imageUrl: Dermatology1,
        readMoreLink: "https://example.com/dermatology-treatments"
    },
    {
        category: "Endocrinology",
        date: "April 15, 2025",
        hospital: "Diabetes & Hormone Clinic",
        title: "Managing Diabetes and Hormonal Disorders",
        description: `Our specialists focus on treating diabetes, thyroid disorders, and hormonal imbalances. With innovative therapies and personalized treatment plans, we help patients maintain optimal health.`,
        imageUrl: Endocrinology1,
        readMoreLink: "https://example.com/endocrinology-treatment"
    },
    {
        category: "Nephrology",
        date: "May 10, 2025",
        hospital: "Kidney Care Institute",
        title: "Advanced Kidney Disease Treatments",
        description: `We provide expert care for kidney disorders, including dialysis and kidney transplantation. Our nephrology team ensures comprehensive renal health management for patients at all stages of kidney disease.`,
        imageUrl: Nephrology1,
        readMoreLink: "https://example.com/nephrology-care"
    },
    {
        category: "Urology",
        date: "June 1, 2025",
        hospital: "Urology Specialists Center",
        title: "Expert Urology Care for Urinary Health",
        description: `Our center provides cutting-edge treatments for urinary tract disorders, kidney stones, and prostate conditions. Minimally invasive procedures ensure faster recovery times and improved patient outcomes.`,
        imageUrl: Urology1,
        readMoreLink: "https://example.com/urology-treatment"
    },
    {
        category: "Medical Breakthroughs",
        title: "New Cancer Treatment Discovered",
        description: "Scientists have found a groundbreaking method to target cancer cells more effectively...",
        date: "October 5, 2024",
        hospital: "Global Research Institute",
        imageUrl: MedicalBreakthroughs2,
        readMoreLink: "#"
    },
    {
        category: "Medical Breakthroughs",
        title: "5 Daily Habits for a Healthier Life",
        description: "Simple changes in your daily routine can have a lasting impact on your overall health...",
        date: "September 20, 2024",
        hospital: "Healthy Living Center",
        imageUrl: MedicalBreakthroughs1,
        readMoreLink: "#"
    },
];

const categories = ["All", "Cardiology", "Gynecology", "Neurology", "Orthopedics", "Spine Injury", "Uncategorized", "Infectious", "Medical Breakthroughs", "Life Style"];

const BlogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);

    // Filter articles when category changes
    useEffect(() => {
        const filtered = selectedCategory === "All" ? articles : articles.filter(article => article.category === selectedCategory);
        setFilteredArticles(filtered);
    }, [selectedCategory]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);
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
                    {filteredArticles?.map((article, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            data-aos="fade-up"
                        >
                            {/* Article Image */}
                            <img src={article.imageUrl} alt={article.title} className="w-full h-60 object-cover rounded-t-lg" />

                            {/* Article Content */}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
                                <p className="text-gray-600 text-sm mt-1">{article.date} • {article.hospital}</p>
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
