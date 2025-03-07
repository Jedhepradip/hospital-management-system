import React, { useEffect, useState } from "react";
// import { doctors } from "../Data/DoctoreData";
import { NavLink } from "react-router-dom";
import { AllDoctors } from "../Redux Toolkit/Features/All-Doctors";
import { DetchinAllDoctors } from "../Redux Toolkit/Features/All-Doctors";
import { RootState, useAppDispatch } from "../Redux Toolkit/Store/store";
import { useSelector } from "react-redux";

const specialties = [
  "General Physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

const AllDoctorsPages: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const [doctors, setalldoctors] = useState<AllDoctors[]>([])
  const dispatch = useAppDispatch();
  const alldcotors = useSelector((state: RootState) => state.AllDoctors.AllDoctors);

  useEffect(() => {
    dispatch(DetchinAllDoctors())
  }, [dispatch])

  useEffect(() => {
    if (alldcotors.length > 0) {
      setalldoctors(alldcotors)
    }
  }, [alldcotors])


  return (
    <div className="container mx-auto px-4 md:px-20 py-10 flex flex-col md:flex-row gap-8">
      {/* Left: Filter Section */}
      <div className="w-full md:w-1/4 bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Browse by Specialization
        </h2>
        <div className="space-y-2">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              className={`w-full py-2 px-4 border text-blue-900 text-left hover:bg-blue-100 transition ${selectedSpecialty === specialty ? "bg-blue-200 font-semibold" : ""
                }`}
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      {/* Right: Doctors List */}
      <div className="w-full md:w-3/4">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Available Doctors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors
            .filter(
              (doctor) =>
                !selectedSpecialty || doctor.specialization === selectedSpecialty
            )
            .map((doctor) => (
              <NavLink to={`/DoctoreAboutPage?doctorID=${encodeURIComponent(doctor?._id)}`}>
                <div
                  key={doctor.name}
                  className=" p-5 rounded-2xl transition duration-300 border border-black"
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
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctorsPages
