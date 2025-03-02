import React, { useState, useEffect } from 'react';
import { FiMenu, FiUser, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { FaChartBar, FaUsers, FaHospital, FaUserMd, FaBlog, FaSignOutAlt, FaCalendarCheck } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";
import { SubmitHandler } from 'react-hook-form';

interface Doctor {
    _id: string;
    name: string;
    specialization: string;
    experience: string;
    profile_picture: string;
    about?: string;
    appointment_fee: string;
}

interface User {
    _id: string;
    name: string;
    email: string;
    contact: string;
}

interface Appointment {
    _id: string;
    userName: string;
    contact: string;
    doctorName: string;
    department: string;
    status: string;
}

interface Facility {
    _id: string;
    title: string;
    description: string[];
    image: string;
}

interface Blog {
    _id: string;
    category: string;
    date: string;
    hospital: string;
    title: string;
    description: string;
    imageUrl: string;
    readMoreLink: string;
}

type FormData = Doctor & Facility & Blog & Appointment & User

const Admin: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState('Dashboard');
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [facilities, setFacilities] = useState<Facility[]>([]);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const fetchData = () => {
        setDoctors(dummyDoctors);
        setUsers(dummyUsers);
        setAppointments(dummyAppointments);
        setFacilities(dummyFacilities);
        setBlogs(dummyBlogs);
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handlePageChange = (page: string) => {
        setActivePage(page);
    };

    const handleEdit = (page: string, id: string) => {
        console.log(`Edit ${page} item with id ${id}`);
    };

    const handleDelete = (page: string, id: string) => {
        let updatedData;
        switch (page) {
            case 'Doctors':
                updatedData = doctors.filter((doctor) => doctor._id !== id);
                setDoctors(updatedData);
                break;
            case 'Users':
                updatedData = users.filter((user) => user._id !== id);
                setUsers(updatedData);
                break;
            case 'Appointments':
                updatedData = appointments.filter((appointment) => appointment._id !== id);
                setAppointments(updatedData);
                break;
            case 'Facilities':
                updatedData = facilities.filter((facility) => facility._id !== id);
                setFacilities(updatedData);
                break;
            case 'Blog':
                updatedData = blogs.filter((blog) => blog._id !== id);
                setBlogs(updatedData);
                break;
            default:
                break;
        }
    };

    const onSubmitDoctor: SubmitHandler<Doctor> = (data) => {
        console.log("data", data);
        const newDoctor = {
            ...data,
            _id: String(Math.random()),
        };
        setDoctors([...doctors, newDoctor]);
        reset();
    };

    const onSubmitFacility: SubmitHandler<Facility> = (data: Facility) => {
        console.log(data);
        const newFacility = {
            ...data,
        };
        setFacilities([...facilities, newFacility]);
        reset();
    };

    const onSubmitBlog: SubmitHandler<Blog> = (data: Blog) => {
        const newBlog = {
            ...data,
            _id: String(Math.random()),
        };
        setBlogs([...blogs, newBlog]);
        reset();
    };

    const renderPageContent = () => {
        switch (activePage) {
            case 'Dashboard':
                return (
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow p-5 rounded-lg">
                            <h3 className="text-lg font-semibold">Total Users</h3>
                            <p className="text-2xl font-bold">{users.length}</p>
                        </div>
                        <div className="bg-white shadow p-5 rounded-lg">
                            <h3 className="text-lg font-semibold">Total Doctors</h3>
                            <p className="text-2xl font-bold">{doctors.length}</p>
                        </div>
                        <div className="bg-white shadow p-5 rounded-lg">
                            <h3 className="text-lg font-semibold">Total Appointments</h3>
                            <p className="text-2xl font-bold">{appointments.length}</p>
                        </div>
                    </div>
                );
            case 'Doctors':
                return (
                    <div className="p-6 max-w-5xl bg-gray-100">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Add Doctor</h3>

                        {/* Form */}
                        <motion.form
                            onSubmit={handleSubmit(onSubmitDoctor)}
                            className="mb-6 bg-white p-6 shadow-md rounded-lg space-y-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        placeholder="Name"
                                        className="border p-4 w-full rounded"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message as string}</p>}
                                </div>

                                <div>
                                    <input
                                        {...register("specialization", { required: "Specialization is required" })}
                                        placeholder="Specialization"
                                        className="border p-4 w-full rounded"
                                    />
                                    {errors.specialization && <p className="text-red-500 text-sm">{errors.specialization.message as string}</p>}
                                </div>

                                <div>
                                    <input
                                        type="number"
                                        {...register("experience", { required: "Experience is required" })}
                                        placeholder="Experience (years)"
                                        className="border p-4 w-full rounded"
                                    />
                                    {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message as string}</p>}
                                </div>

                                <div>
                                    <input
                                        type="file"
                                        {...register("profile_picture", { required: "Profile picture URL is required" })}
                                        placeholder="Profile Picture URL"
                                        className="border p-3 w-full rounded"
                                    />
                                    {errors.profile_picture && <p className="text-red-500 text-sm">{errors.profile_picture.message as string}</p>}
                                </div>
                            </div>

                            <textarea
                                {...register("about")}
                                placeholder="About Doctor"
                                className="border p-4 w-full rounded"
                            />

                            <input
                                type="number"
                                {...register("appointment_fee", { required: "Appointment Fee is required" })}
                                placeholder="Appointment Fee"
                                className="border p-4 w-full rounded"
                            />
                            {errors.appointment_fee && <p className="text-red-500 text-sm">{errors.appointment_fee.message as string}</p>}

                            <motion.button
                                type="submit"
                                className="bg-blue-950 hover:bg-blue-900 text-white p-4 w-full transition duration-10"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Add Doctor
                            </motion.button>
                        </motion.form>

                        {/* Doctors List */}
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Doctors List</h3>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {doctors.length === 0 ? (
                                <p className="text-gray-500">No doctors added yet.</p>
                            ) : (
                                doctors.map((doctor) => (
                                    <motion.div
                                        key={doctor._id}
                                        className="flex justify-between items-center bg-white p-3 shadow-md rounded-lg mb-3"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-gray-700">{doctor.name} - {doctor.specialization}</span>
                                        <div className="space-x-2">
                                            <button onClick={() => handleEdit("Doctors", doctor._id)}>
                                                <FiEdit2 className="text-blue-500 hover:text-blue-700 transition duration-200" />
                                            </button>
                                            <button onClick={() => handleDelete("Doctors", doctor._id)}>
                                                <FiTrash2 className="text-red-500 hover:text-red-700 transition duration-200" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </motion.div>
                    </div>
                );
            case 'Users':
                return (
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Users List</h3>
                        {users.map((user) => (
                            <div key={user._id} className="flex justify-between items-center bg-white p-3 shadow rounded mb-2">
                                <span>{user.name} - {user.email} - {user.contact}</span>
                                <div className="space-x-2">
                                    <button onClick={() => handleEdit('Users', user._id)}><FiEdit2 className="text-blue-500" /></button>
                                    <button onClick={() => handleDelete('Users', user._id)}><FiTrash2 className="text-red-500" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Appointments':
                return (
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Appointments List</h3>
                        {appointments.map((appointment) => (
                            <div key={appointment._id} className="flex justify-between items-center bg-white p-3 shadow rounded mb-2">
                                <span>{appointment.userName} - {appointment.doctorName} - {appointment.department} - {appointment.status} - {appointment.contact}</span>
                                <div className="space-x-2">
                                    <button onClick={() => handleEdit('Appointments', appointment._id)}><FiEdit2 className="text-blue-500" /></button>
                                    <button onClick={() => handleDelete('Appointments', appointment._id)}><FiTrash2 className="text-red-500" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Facilities':
                return (
                    <div className="p-6 min-h-screen">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Add Facility</h3>
                        <form onSubmit={handleSubmit(onSubmitFacility)} className="bg-white shadow-md p-6 rounded-lg mb-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type='text'
                                    {...register("title", { required: true })}
                                    placeholder="Title"
                                    className="border p-4 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                                />
                                {errors.title && <p className="text-red-500 text-sm">Title is required</p>}

                                <input type='file'
                                    {...register("image", { required: true })}
                                    placeholder="Image URL"
                                    className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-black"
                                />
                                {errors.image && <p className="text-red-500 text-sm">Image URL is required</p>}
                            </div>

                            <textarea
                                {...register("description", { required: true })}
                                placeholder="Description (comma-separated)"
                                className="border p-4 rounded-lg w-full mt-4 focus:ring-2 focus:ring-blue-300"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">Description is required</p>}

                            <button type="submit" className="bg-blue-950 text-white p-3 mt-4 w-full hover:bg-blue-900 transition">
                                Add Facility
                            </button>
                        </form>

                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Facilities List</h3>
                        <div className="space-y-4">
                            {facilities.length > 0 ? (
                                facilities.map((facility) => (
                                    <div key={facility._id} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800">{facility.title}</h4>
                                            <p className="text-gray-600 text-sm">🖼️ <b>Image:</b> {facility.image}</p>
                                            <p className="text-gray-600 text-sm">
                                                📝 <b>Description:</b> {facility.description.join(", ")}
                                            </p>
                                        </div>
                                        <div className="space-x-2">
                                            <button className="text-blue-500 hover:text-blue-700 transition">
                                                <FiEdit2 />
                                            </button>
                                            <button onClick={() => handleDelete("Facilities", facility._id)} className="text-red-500 hover:text-red-700 transition">
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center">No facilities added yet.</p>
                            )}
                        </div>
                    </div>
                );
            case 'Blog':
                return (
                    <div className="p-6 bg-gray-100 min-h-screen">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Add Blog Post</h3>
                        <form onSubmit={handleSubmit(onSubmitBlog)} className="bg-white shadow-md p-6 rounded-lg mb-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type='text'
                                    {...register("category", { required: true })}
                                    placeholder="Category"
                                    className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                                />
                                {errors.category && <p className="text-red-500 text-sm">Category is required</p>}

                                <input
                                    typeof='date'
                                    {...register("date", { required: true })}
                                    type="date"
                                    placeholder="Date"
                                    className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                                />
                                {errors.date && <p className="text-red-500 text-sm">Date is required</p>}

                                <input
                                    type='text'
                                    {...register("hospital", { required: true })}
                                    placeholder="Hospital"
                                    className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                                />
                                {errors.hospital && <p className="text-red-500 text-sm">Hospital name is required</p>}

                                <input
                                    type='text'
                                    {...register("title", { required: true })}
                                    placeholder="Title"
                                    className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                                />
                                {errors.title && <p className="text-red-500 text-sm">Title is required</p>}

                                <input
                                    type='file'
                                    {...register("imageUrl", { required: true })}
                                    placeholder="Image URL"
                                    className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                                />
                                {errors.imageUrl && <p className="text-red-500 text-sm">Image URL is required</p>}

                                <input type='link'
                                    {...register("readMoreLink")}
                                    placeholder="Read More Link"
                                    className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                                />
                            </div>

                            <textarea
                                {...register("description", { required: true })}
                                placeholder="Description"
                                className="border p-3 rounded-lg w-full mt-4 focus:ring-2 focus:ring-blue-300"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">Description is required</p>}

                            <button type="submit" className="bg-blue-950 text-white p-3 mt-4 w-full hover:bg-blue-900 transition">
                                Add Blog
                            </button>
                        </form>

                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Blog Posts List</h3>
                        <div className="space-y-4">
                            {blogs.length > 0 ? (
                                blogs.map((blog) => (
                                    <div key={blog._id} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800">{blog.title}</h4>
                                            <p className="text-gray-600 text-sm">🏥 <b>Hospital:</b> {blog.hospital}</p>
                                            <p className="text-gray-600 text-sm">📅 <b>Date:</b> {blog.date}</p>
                                            <p className="text-gray-600 text-sm">📌 <b>Category:</b> {blog.category}</p>
                                            <p className="text-gray-600 text-sm truncate">📝 <b>Description:</b> {blog.description}</p>
                                            {blog.readMoreLink && (
                                                <a href={blog.readMoreLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm underline">
                                                    Read More
                                                </a>
                                            )}
                                        </div>
                                        <div className="space-x-2">
                                            <button className="text-blue-500 hover:text-blue-700 transition">
                                                <FiEdit2 />
                                            </button>
                                            <button onClick={() => handleDelete("Blog", blog._id)} className="text-red-500 hover:text-red-700 transition">
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center">No blog posts added yet.</p>
                            )}
                        </div>
                    </div>
                );
            default:
                return <div>Select a page from the sidebar.</div>;
        }
    };

    const dummyDoctors: Doctor[] = [
        { _id: '1', name: 'Dr. John Doe', specialization: 'Cardiologist', experience: '10 years', profile_picture: 'https://via.placeholder.com/150', about: 'Experienced cardiologist.', appointment_fee: '$100' },
        { _id: '2', name: 'Dr. Jane Smith', specialization: 'Dermatologist', experience: '5 years', profile_picture: 'https://via.placeholder.com/150', about: 'Specializes in skin conditions.', appointment_fee: '$80' },
    ];

    const dummyUsers: User[] = [
        { _id: '1', name: 'Alice Johnson', email: 'alice@example.com', contact: '123-456-7890' },
        { _id: '2', name: 'Bob Williams', email: 'bob@example.com', contact: '987-654-3210' },
    ];

    const dummyAppointments: Appointment[] = [
        { _id: '1', userName: 'Alice Johnson', contact: '123-456-7890', doctorName: 'Dr. John Doe', department: 'Cardiology', status: 'Scheduled' },
        { _id: '2', userName: 'Bob Williams', contact: '987-654-3210', doctorName: 'Dr. Jane Smith', department: 'Dermatology', status: 'Confirmed' },
    ];

    const dummyFacilities: Facility[] = [
        { _id: '1', title: 'ICU', description: ['24/7 care', 'Advanced equipment'], image: 'https://via.placeholder.com/150' },
        { _id: '2', title: 'Pharmacy', description: ['Wide range of medicines'], image: 'https://via.placeholder.com/150' },
    ];

    const dummyBlogs: Blog[] = [
        { _id: '1', category: 'Health', date: '2023-10-26', hospital: 'General Hospital', title: 'Healthy Living', description: 'Tips for a healthy lifestyle.', imageUrl: 'https://via.placeholder.com/150', readMoreLink: 'https://example.com/health' },
        { _id: '2', category: 'Medicine', date: '2023-10-25', hospital: 'Specialist Clinic', title: 'New Treatments', description: 'Advances in medical treatments.', imageUrl: 'https://via.placeholder.com/150', readMoreLink: 'https://example.com/medicine' },
    ];

    return (
        <div className="flex h-screen">
            <div className={`bg-blue-950 text-white w-64 p-5 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
                <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
                <ul>
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Dashboard" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Dashboard")}>
                        <FaChartBar /> Dashboard
                    </li>
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Doctors" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Doctors")}>
                        <FaUserMd /> Doctors
                    </li>
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Users" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Users")}>
                        <FaUsers /> Users
                    </li>
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Appointments" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Appointments")}>
                        <FaCalendarCheck /> Appointments
                    </li>
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Facilities" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Facilities")}>
                        <FaHospital /> Facilities
                    </li>
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Blog" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Blog")}>
                        <FaBlog /> Blog
                    </li>
                </ul>
            </div>

            <div className="flex-1 flex flex-col">
                <div className="bg-white p-4 shadow flex justify-between items-center relative">
                    <FiMenu className="text-xl cursor-pointer md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    <h2 className="text-lg font-semibold">{activePage}</h2>
                    <div className="relative">
                        <FiUser className="text-xl cursor-pointer" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} />
                        {isUserMenuOpen && (
                            <div className="absolute right  -0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                                <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => console.log("Logout")}>
                                    <FaSignOutAlt className="inline-block mr-2" /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {renderPageContent()}
            </div>
        </div>
    );
};

export default Admin;