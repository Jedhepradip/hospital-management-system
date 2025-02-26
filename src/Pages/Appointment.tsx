import React from 'react'

const Appointment: React.FC = () => {
    return (
        <>
            <div
                className="relative h-[320px] bg-cover bg-center flex items-center justify-center text-white bg-blue-400"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
            >
                <div className="absolute inset-0 bg-blue-950/60"></div>
                <div className="relative text-center z-10 py-16 px-4">
                    <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-gray-200 drop-shadow-md">
                        Book Your Appointment
                    </h1>
                    <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 text-white drop-shadow-lg">
                        Quality Healthcare, Anytime
                    </h1>
                    <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Schedule your appointment with top healthcare professionals. Get expert consultations,
                        timely medical advice, and personalized care, all at your convenience.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-lg">
                {/* Left Side - Emergency Contact Info */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold text-blue-900">Call for an Emergency Service!</h2>
                    <p className="text-3xl font-extrabold text-blue-700 mt-2">+84 789 1256</p>
                </div>

                {/* Right Side - Appointment Form */}
                <div className="w-full md:w-1/2 bg-white p-6 shadow-md">
                    <h2 className="text-xl font-bold text-blue-900 text-center mb-4">Book an Appointment</h2>
                    <form className="space-y-4">
                        {/* Row 1: Department & Doctor Selection */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500">
                                <option>Choose Department</option>
                                <option>Cardiology</option>
                                <option>Dermatology</option>
                                <option>Neurology</option>
                                <option>Orthopedics</option>
                            </select>
                            <select className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500">
                                <option>Select Doctor</option>
                                <option>Dr. John Doe</option>
                                <option>Dr. Lisa Smith</option>
                                <option>Dr. Michael Brown</option>
                            </select>
                        </div>

                        {/* Row 2: Date & Time Selection */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="date" className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500" />
                            <input type="time" className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Row 3: Full Name & Phone Number */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500" />
                            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Message Input */}
                        <textarea placeholder="Your Message" rows={10} className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 h-20"></textarea>

                        {/* Submit Button */}
                        <button className="w-[50%] bg-blue-900 text-white font-bold py-3 hover:bg-blue-700 transition">
                            Book Appointment
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Appointment