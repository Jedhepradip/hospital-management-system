import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BookAppointment: React.FC = () => {
  return (
    <div className="px-4 md:px-20 py-6 bg-blue-900 rounded-[20px] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700 leading-snug">
            Book Appointment <br />
            With <span className="text-blue-600">100+ Trusted Doctors</span>
          </h1>
          <p className="mt-4  text-lg">
            Get access to the best healthcare professionals anytime, anywhere.
          </p>
          <button className="mt-6 flex gap-2 bg-white text-black py-2 px-6 rounded-lg text-sm shadow-lg hover:bg-blue-700 transition">
            Create Account <FaArrowRight className="mt-1" />
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://prescripto.vercel.app/assets/appointment_img-DzbZlMsi.png"
            alt="Doctor Appointment"
            className="w-full max-w-md md:max-w-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
