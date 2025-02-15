import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Speciality from "./SpecialityPage";
import TopDoctorsList from "./TopDoctorsList";
import BookAppointment from "./BookAppointment";
const HomePages: React.FC = () => {
  return (
    <div className="md:px-32 px-5 mt-5 mb-5">
      <div className="bg-blue-500 rounded-[20px] text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-7">
        {/* Left Section */}
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </h1>
          <div className="flex items-center space-x-4 mt-6">
            <img
              src="https://prescripto.vercel.app/assets/group_profiles-BCL6AVF5.png"
              alt="Doctors"
              className="w-[100px] h-12 md:w-28 md:h-12 object-cover rounded-full"
            />
            <p className="text-lg md:text-[15px] text-white">
              Simply browse through our extensive list of trusted doctors, <br />
              schedule your appointment hassle-free.
            </p>
          </div>
          {/* Book Appointment Button */}
          <button className="mt-6 flex items-center bg-white text-blue-900 px-5 py-2 rounded-full font-semibold text-sm shadow-lg hover:bg-gray-200 transition">
            Book Appointment <FaArrowRight className="ml-3" />
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="https://prescripto.vercel.app/assets/header_img-DhAi3lLA.png"
            alt="Medical Header"
            className="w-full max-w-lg md:max-w-xl rounded-lg"
          />
        </div>
      </div>
      <Speciality />
      <TopDoctorsList />
      <BookAppointment />
    </div>
  );
};

export default HomePages;
