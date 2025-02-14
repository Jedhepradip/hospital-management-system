import React from "react";
import { doctors } from "../Data/DoctoreData";

const TopDoctorsList: React.FC = () => {
    return (
        <div className="p-6  min-h-screen">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                Top Doctors to Book
            </h2>
            <p className="text-center text-gray-600 mb-8">
                Simply browse through our extensive list of trusted doctors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {doctors.map((doctor, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 rounded-2xl transition duration-300 border border-black"
                    >
                        <img
                            src={doctor.profile_picture}
                            alt={doctor.name}
                            className="w-full h-[180px] object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-lg font-semibold text-green-600">{doctor.name}</h3>
                        <p className="text-gray-500">{doctor.specialization}</p>
                        <p className="text-gray-700 font-medium">Experience: {doctor.experience}</p>
                        <p className="text-gray-800 font-bold">Fee: {doctor.appointment_fee}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopDoctorsList;
