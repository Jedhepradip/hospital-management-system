import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

const experienceRanges = [
  { label: "1-5 years", min: 1, max: 5 },
  { label: "6-10 years", min: 6, max: 10 },
  { label: "11-15 years", min: 11, max: 15 },
  { label: "16+ years", min: 16, max: 100 },
];

const feeRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
  { label: "Above ₹2000", min: 2000, max: 10000 },
];

interface AdvancedFilters {
  specialty: string;
  experienceRange: { min: number; max: number } | null;
  feeRange: { min: number; max: number } | null;
  searchTerm: string;
}

const AllDoctorsPages: React.FC = () => {
  const [filters, setFilters] = useState<AdvancedFilters>({
    specialty: "",
    experienceRange: null,
    feeRange: null,
    searchTerm: "",
  });

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [doctors, setalldoctors] = useState<AllDoctors[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<AllDoctors[]>([]);

  const dispatch = useAppDispatch();
  const { AllDoctors, loading } = useSelector((state: RootState) => state.AllDoctors);

  useEffect(() => {
    dispatch(DetchinAllDoctors());
  }, [dispatch]);

  useEffect(() => {
    if (AllDoctors.length > 0) {
      setalldoctors(AllDoctors);
      setFilteredDoctors(AllDoctors);
    }
  }, [AllDoctors]);

  // Advanced filtering logic
  useEffect(() => {
    let filtered = doctors;

    // Filter by specialty
    if (filters.specialty) {
      filtered = filtered.filter(doctor => doctor.specialization === filters.specialty);
    }

    // Filter by search term
    if (filters.searchTerm) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    // Filter by experience range
    if (filters.experienceRange) {
      filtered = filtered.filter(doctor => {
        const experienceYears = parseInt(doctor.experience.replace(/\D/g, ''));
        return experienceYears >= filters.experienceRange!.min &&
          experienceYears <= filters.experienceRange!.max;
      });
    }

    // Filter by fee range
    if (filters.feeRange) {
      filtered = filtered.filter(doctor => {
        const fee = parseInt(doctor.appointment_fee.replace(/\D/g, ''));
        return fee >= filters.feeRange!.min && fee <= filters.feeRange!.max;
      });
    }

    setFilteredDoctors(filtered);
  }, [filters, doctors]);

  const clearAllFilters = () => {
    setFilters({
      specialty: "",
      experienceRange: null,
      feeRange: null,
      searchTerm: "",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const filterVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      marginBottom: 0
    },
    visible: {
      opacity: 1,
      height: "auto",
      marginBottom: 24,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 md:px-20 py-10 flex flex-col lg:flex-row gap-8">
        {/* Left: Filter Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/4"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 sticky top-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-blue-900 bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent">
                Find Your Doctor
              </h2>
              {(filters.specialty || filters.experienceRange || filters.feeRange || filters.searchTerm) && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search doctors..."
                value={filters.searchTerm}
                onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
              />
            </div>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="w-full mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {showAdvancedFilters ? "Hide" : "Show"} Advanced Filters
            </button>

            {/* Specialization Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Specialization</h3>
              {loading ? (
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="w-full py-3 bg-gray-100 animate-pulse rounded-lg"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {specialties.map((specialty) => (
                    <motion.button
                      key={specialty}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 px-4 text-left rounded-xl transition-all duration-200 ${filters.specialty === specialty
                        ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-blue-50 text-gray-700 border border-gray-200"
                        }`}
                      onClick={() => setFilters(prev => ({
                        ...prev,
                        specialty: prev.specialty === specialty ? "" : specialty
                      }))}
                    >
                      {specialty}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Advanced Filters */}
            <AnimatePresence>
              {showAdvancedFilters && (
                <motion.div
                  variants={filterVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-6"
                >
                  {/* Experience Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Experience</h3>
                    <div className="space-y-2">
                      {experienceRanges.map((range) => (
                        <motion.button
                          key={range.label}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full py-2 px-4 text-left rounded-lg transition-all duration-200 ${filters.experienceRange?.min === range.min
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                            : "bg-gray-50 hover:bg-purple-50 text-gray-700 border border-gray-200"
                            }`}
                          onClick={() => setFilters(prev => ({
                            ...prev,
                            experienceRange: prev.experienceRange?.min === range.min ? null : range
                          }))}
                        >
                          {range.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Fee Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Consultation Fee</h3>
                    <div className="space-y-2">
                      {feeRanges.map((range) => (
                        <motion.button
                          key={range.label}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full py-2 px-4 text-left rounded-lg transition-all duration-200 ${filters.feeRange?.min === range.min
                            ? "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg"
                            : "bg-gray-50 hover:bg-green-50 text-gray-700 border border-gray-200"
                            }`}
                          onClick={() => setFilters(prev => ({
                            ...prev,
                            feeRange: prev.feeRange?.min === range.min ? null : range
                          }))}
                        >
                          {range.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right: Doctors List */}
        <div className="w-full lg:w-3/4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent">
                Available Doctors
              </h2>
              <p className="text-gray-600 mt-2">
                {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </motion.div>

          {loading ? (
            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="p-6 rounded-2xl shadow-lg animate-pulse bg-gray-300 h-80"
                />
              ))}
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              {filteredDoctors.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
                  <p className="text-gray-500">Try adjusting your filters to see more results</p>
                </motion.div>
              ) : (
                <motion.div
                  key={filteredDoctors.length}
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredDoctors.map((doctor) => (
                    <motion.div
                      key={doctor._id}
                      variants={cardVariants}
                      whileHover="hover"
                      layout
                    >
                      <NavLink to={`/DoctoreAboutPage/${doctor._id}`}>
                        <div className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="relative z-10">
                            <div className="relative mb-4 overflow-hidden rounded-xl">
                              <img
                                src={doctor.profile_picture}
                                alt={doctor.name}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute top-3 right-3">
                                <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-green-600">
                                  Available
                                </div>
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                              Dr. {doctor.name}
                            </h3>

                            <div className="space-y-2">
                              <div className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                <span className="font-medium">{doctor.specialization}</span>
                              </div>

                              <div className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                <span>Experience: {doctor.experience}</span>
                              </div>

                              <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center text-gray-800">
                                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                  <span className="font-bold">${doctor.appointment_fee}</span>

                                  {/* ₹ */}
                                </div>

                                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium group-hover:shadow-lg transition-shadow">
                                  {/* Book Now */}
                                  View More
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllDoctorsPages;