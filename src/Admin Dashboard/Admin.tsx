/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { FiMenu, FiUser, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { FaChartBar, FaUsers, FaHospital, FaUserMd, FaBlog, FaSignOutAlt, FaCalendarCheck, FaCalendar } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { motion } from "framer-motion";
import { SubmitHandler } from 'react-hook-form';
import { RiGalleryFill } from 'react-icons/ri';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { RootState, useAppDispatch } from '../Redux Toolkit/Store/store';
import { useSelector } from 'react-redux';
import { Blog, FetchingBlogData } from '../Redux Toolkit/Features/Blog';
import { DetchinAllDoctors, AllDoctors } from '../Redux Toolkit/Features/All-Doctors';
import { FetchinGalleryAllData, Gallery } from '../Redux Toolkit/Features/gallery';
import { AllFacility, DetchinAllFacility } from '../Redux Toolkit/Features/All-Facility';
import { AllUser, FetchinAllUserdataToAdmin } from '../Redux Toolkit/Features/All-User';
import { AllAppointment, FetchinAllAppointment } from '../Redux Toolkit/Features/All-appointment';
import { DetchinAllSpecialAppointment, SpecialAppointment } from '../Redux Toolkit/Features/All-SpecialAppointment';


interface Appointment {
    _id: string;
    userName: string;
    contact: string;
    doctorName: string;
    department: string;
    status: string;
}

interface ImgComponents {
    imageUrl: string,
}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3YzY5MjExY2Q0ZTI0N2U5YjNjNjdiZCIsImVtYWlsIjoiUHJhZGlqZWRoZWRAZ2FpbC5jb20iLCJuYW1lIjoicHJhZGlwIn0.P2ovZ3fyS2Ml82puLqQbdVyg7EjY4F3iyVnG3izUosQ"

type FormData = AllDoctors & AllFacility & Blog & Appointment & AllUser & ImgComponents

const Admin: React.FC = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState('Dashboard');

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const [users, setUsers] = useState<AllUser[]>([]);
    const [doctors, setalldoctors] = useState<AllDoctors[]>([])
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [GalleryPage, SetGalleryData] = useState<Gallery[]>([]);
    const [facilities, setFacilities] = useState<AllFacility[]>([]);
    const [appointments, setAppointments] = useState<AllAppointment[]>([]);
    const [Scpileappointments, setAppointmentsSpcile] = useState<SpecialAppointment[]>([]);

    const dispatch = useAppDispatch();
    const allBlog = useSelector((state: RootState) => state.Blog.AllBlog);
    const alluser = useSelector((state: RootState) => state.AllUser.AllUser);
    const AllGallery = useSelector((state: RootState) => state.gallery.AllGallery);
    const alldcotors = useSelector((state: RootState) => state.AllDoctors.AllDoctors);
    const Facilitya = useSelector((state: RootState) => state.AllFacility.AllFacility);
    const Appointments = useSelector((state: RootState) => state.Allappointment.AllAppointmentdata)
    const SpecilAppointments = useSelector((state: RootState) => state.AllSpecialAppointment.AllSpecialAppointment)

    useEffect(() => {
        if (alldcotors?.length > 0) {
            setalldoctors(alldcotors)
        }
        if (allBlog?.length > 0) {
            setBlogs(allBlog)
        }
        if (AllGallery?.length > 0) {
            SetGalleryData(AllGallery)
        }
        if (Facilitya?.length > 0) {
            setFacilities(Facilitya)
        }
        if (alluser?.length > 0) {
            setUsers(alluser)
        }
        if (Appointments?.length > 0) {
            setAppointments(Appointments)
        }
        if (SpecilAppointments.length > 0) {
            setAppointmentsSpcile(SpecilAppointments)
        }
    }, [alldcotors, allBlog, AllGallery, Facilitya, alluser, Appointments, SpecilAppointments])

    const handlePageChange = (page: string) => {
        setActivePage(page);
    };

    const onSubmitDoctor: SubmitHandler<AllDoctors> = async (data) => {
        const token = localStorage.getItem("token")
        if (!token) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            return;
        }
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("specialization", data.specialization)
        formData.append("about", data.about || "")
        formData.append("appointment_fee", data.appointment_fee)
        formData.append("experience", data.experience)
        formData.append("profile_picture", data.profile_picture)
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api-Doctors/DoctorsRouter/register`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`, // Send Bearer Token
                },
            });

            if (response.status === 201 || response.status === 200) {
                toast.success("Appointment booked successfully!", { position: "top-right", autoClose: 3000 });
                reset(); // Clear form after submission
            }

        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (error.response.status === 409 || errorMessage === "User already exists") {
                    console.log("Error: User already exists.");
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                } else {
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                    console.log("Error pp: ", errorMessage || "Unexpected error occurred.");
                }
            } else {
                console.log("Error: Network issue or server not responding", error);
            }
        }
    };

    const onSubmitFacility: SubmitHandler<AllFacility> = async (data: AllFacility) => {
        if (!token) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            return;
        }
        const formData = new FormData();
        formData.append("description", data.description.toString())
        formData.append("image", data.image)
        formData.append("title", data.title)
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api-Facility/FacilityRouter/create`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`, // Send Bearer Token
                },
            });

            const JobsResponses = await response.data;

            if (response.status === 201 || response.status === 200) {
                toast.success(JobsResponses.message, { position: "top-right", autoClose: 3000 });
                reset(); // Clear form after submission
            }

        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (error.response.status === 409 || errorMessage === "User already exists") {
                    console.log("Error: User already exists.");
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                } else {
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                    console.log("Error pp: ", errorMessage || "Unexpected error occurred.");
                }
            } else {
                console.log("Error: Network issue or server not responding", error);
            }
        }
    };

    const onSubmitBlog: SubmitHandler<Blog> = async (data: Blog) => {
        // const token = localStorage.getItem("token")
        if (!token) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            return;
        }
        const formData = new FormData();
        formData.append("category", data.category)
        formData.append("date", data.date)
        formData.append("description", data.description)
        formData.append("hospital", data.hospital)
        formData.append("imageUrl", data.imageUrl)
        formData.append("title", data.title)
        formData.append("readMoreLink", data.readMoreLink)
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api-blog/Blogrouter/create   `, formData, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`, // Send Bearer Token
                },
            });

            const JobsResponses = await response.data;

            if (response.status === 201 || response.status === 200) {
                toast.success(JobsResponses.message, { position: "top-right", autoClose: 3000 });
                reset(); // Clear form after submission
            }

        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (error.response.status === 409 || errorMessage === "User already exists") {
                    console.log("Error: User already exists.");
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                } else {
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                    console.log("Error pp: ", errorMessage || "Unexpected error occurred.");
                }
            } else {
                console.log("Error: Network issue or server not responding", error);
            }
        }
    };

    const onSubmitImage: SubmitHandler<ImgComponents> = async (data) => {
        // const token = localStorage.getItem("token")
        if (!token) {
            toast.error("Failed to book appointment. Please login first.", { position: "top-right", autoClose: 3000 });
            return;
        }
        const formData = new FormData();
        formData.append("GalleryImg", data.imageUrl)

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api-Gallery/Galleryrouter/create   `, formData, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`, // Send Bearer Token
                },
            });

            const JobsResponses = await response.data;

            if (response.status === 201 || response.status === 200) {
                toast.success(JobsResponses.message, { position: "top-right", autoClose: 3000 });
                reset(); // Clear form after submission
            }

        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data.message;
                if (error.response.status === 409 || errorMessage === "User already exists") {
                    console.log("Error: User already exists.");
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                } else {
                    toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>)
                    console.log("Error pp: ", errorMessage || "Unexpected error occurred.");
                }
            } else {
                console.log("Error: Network issue or server not responding", error);
            }
        }
    };

    useEffect(() => {
        dispatch(FetchingBlogData());
        dispatch(DetchinAllDoctors())
        dispatch(DetchinAllFacility());
        dispatch(FetchinGalleryAllData());
        dispatch(FetchinAllAppointment())
        dispatch(FetchinAllUserdataToAdmin())
        dispatch(DetchinAllSpecialAppointment())
    }, [dispatch])


    const handleDelete = async (id: string, apiPath: string) => {
        if (!token) {
            toast.error("Failed to delete item. Please login first.", { position: "top-right", autoClose: 3000 });
            return;
        }

        try {
            const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}${apiPath}/delete/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            const responseData = response.data;

            if (response.status === 200 || response.status === 201) {
                toast.success(responseData.message, { position: "top-right", autoClose: 3000 });
            }

        } catch (error: any) {
            const errorMessage = error.response?.data?.message || "Unexpected error occurred.";
            console.error("Delete Error:", errorMessage);
            toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>);
        }
    };

    const handleDeleteFacilities = (id: string) => handleDelete(id, "/api-Facility/FacilityRouter/Facility");
    const handleDeleteGallery = (id: string) => handleDelete(id, "/api-Gallery/Galleryrouter");
    const handleDeleteBlog = (id: string) => handleDelete(id, "/api-blog/Blogrouter");
    const handleDeleteDoctor = (id: string) => handleDelete(id, "/api-Doctors/DoctorsRouter");
    const handleDeleteUser = (id: string) => handleDelete(id, "/api-user/UserRouther");
    const handleDeleteAppointment = (id: string) => handleDelete(id, "/api-appointments/appointmentsRouter");
    const handleDeleteSpecialAppointment = (id: string) => handleDelete(id, "/api-Specile/SpecileAppointments");

    const handleStatusChangeappointment = async (id: string, status: string) => {
        try {
            if (!token) {
                toast.error("Unauthorized! Please log in again.");
                return;
            }

            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api-appointments/appointmentsRouter/update/${id}`,
                { status },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const responseData = response.data; // Fixed typo

            if (response.status === 200 || response.status === 201) {
                toast.success(responseData.message, { position: "top-right", autoClose: 3000 });
            }
        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data?.message || "Unexpected error occurred.";
                toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>);

                console.error("Error:", errorMessage);
            } else {
                console.error("Network issue or server not responding", error);
            }
        }
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
                        <div className="bg-white shadow p-5 rounded-lg">
                            <h3 className="text-lg font-semibold">Total Special Appointment</h3>
                            <p className="text-2xl font-bold">{appointments.length}</p>
                        </div>
                        <div className="bg-white shadow p-5 rounded-lg">
                            <h3 className="text-lg font-semibold">Total Facility</h3>
                            <p className="text-2xl font-bold">{facilities.length}</p>
                        </div>
                        <div className="bg-white shadow p-5 rounded-lg">
                            <h3 className="text-lg font-semibold">Total Blogs</h3>
                            <p className="text-2xl font-bold">{blogs?.length}</p>
                        </div>
                        <div className="bg-white shadow p-5 rounded-lg">
                            <h3 className="text-lg font-semibold">Total Gallery Photos</h3>
                            <p className="text-2xl font-bold">{GalleryPage.length}</p>
                        </div>
                        <div className="bg-white shadow p-5 rounded-lg">
                            <h3 className="text-lg font-semibold">Total Contact</h3>
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
                                        type="URl"
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
                            {doctors?.length === 0 ? (
                                <p className="text-gray-500">No doctors added yet.</p>
                            ) : (
                                doctors?.map((doctor) => (
                                    <motion.div
                                        key={doctor._id}
                                        className="flex justify-between items-center bg-white p-3 shadow-md rounded-lg mb-3"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-gray-700">{doctor?.name} - {doctor?.specialization}</span>
                                        <div className="space-x-2">
                                            <button>
                                                <FiEdit2 className="text-blue-500 hover:text-blue-700 transition duration-200" />
                                            </button>
                                            <button onClick={() => handleDeleteDoctor(doctor?._id)}>
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
                            <div key={user?._id} className="flex justify-between items-center bg-white p-3 shadow rounded mb-2">
                                <span>{user?.fullname} - {user?.email} - {user?.contact}</span>
                                <div className="space-x-2">
                                    <button><FiEdit2 className="text-blue-500" /></button>
                                    <button><FiTrash2 className="text-red-500" onClick={() => handleDeleteUser(user?._id)} /></button>
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
                            <div
                                key={appointment._id}
                                className="flex justify-between items-center bg-white p-3 shadow rounded mb-2"
                            >
                                <span>
                                    {appointment.fullname} - {appointment.selectDoctor} -{" "}
                                    {appointment.choosedepartment} - {appointment.phonnumber}
                                </span>
                                <div className="flex items-center space-x-4">
                                    {/* Dropdown for selecting appointment status */}
                                    <select
                                        className="border rounded p-1 text-sm"
                                        value={appointment.status}
                                        onChange={(e) => handleStatusChangeappointment(appointment._id, e.target.value)}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                    <button>
                                        <FiEdit2 className="text-blue-500" />
                                    </button>
                                    <button onClick={() => handleDeleteAppointment(appointment._id)}>
                                        <FiTrash2 className="text-red-500" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Special Appointment':
                return (
                    <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Special Appointments List</h3>
                        {Scpileappointments.map((appointment) => (
                            <div key={appointment._id} className="flex justify-between items-center bg-white p-3 shadow rounded mb-2">
                                <span>{appointment.patientName} - {appointment.doctor} - {appointment.department} - {appointment.status} - {appointment.phonnumber}</span>
                                <div className="space-x-2">
                                    <button><FiEdit2 className="text-blue-500" /></button>
                                    <button><FiTrash2 className="text-red-500" onClick={() => handleDeleteSpecialAppointment(appointment?._id)} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'Facilities':
                return (
                    <div className="p-6 max-w-4xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Facility</h2>

                        <form onSubmit={handleSubmit(onSubmitFacility)} className="bg-white p-6 rounded-lg mb-6">
                            <input
                                type="text"
                                {...register("title", { required: "Title is required" })}
                                placeholder="Title"
                                className="border border-gray-300 p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

                            <input
                                type="url"
                                {...register("image", { required: "Image URL is required" })}
                                placeholder="Image URL"
                                className="border border-gray-300 p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

                            <textarea
                                {...register("description", { required: "Description is required" })}
                                placeholder="Description"
                                className="border border-gray-300 p-3 rounded-md w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

                            <button type="submit" className="bg-blue-950 text-white p-3 w-full rounded-md hover:bg-blue-900 transition">
                                Add Facility
                            </button>
                        </form>


                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Facilities List</h2>
                        <div className="space-y-4">
                            {facilities.length > 0 ? (
                                facilities.map((facility) => (
                                    <div key={facility._id} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">

                                        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
                                            <img src={facility.image} alt={facility.title} className="w-16 h-16 object-cover rounded-md" />

                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{facility.title}</h3>
                                                <p className="text-gray-600 text-sm">
                                                    📝 <b>Description:</b> {facility.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex space-x-3">
                                            <button className="text-blue-600 hover:text-blue-800 transition">
                                                <FiEdit2 />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteFacilities(facility._id)}
                                                className="text-red-600 hover:text-red-800 transition">
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
                                    type='URL'
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
                                    <div key={blog._id} className="flex items-center bg-white p-4 shadow-md rounded-lg gap-4">
                                        {/* Blog Image */}
                                        {blog.imageUrl && (
                                            <img src={blog.imageUrl} alt={blog.title} className="w-24 h-24 object-cover rounded-lg" />
                                        )}
                                        {/* Blog Content */}
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-800">{blog.title}</h4>
                                            <p className="text-gray-600 text-sm">🏥 <b>Hospital:</b> {blog.hospital}</p>
                                            <p className="text-gray-600 text-sm">📅 <b>Date:</b> {blog.date}</p>
                                            <p className="text-gray-600 text-sm">📌 <b>Category:</b> {blog.category}</p>
                                            <p className="text-gray-600 text-sm truncate">📝 <b>Description:</b> {blog.description}</p>
                                        </div>
                                        {/* Action Buttons */}
                                        <div className="space-x-2">
                                            <button className="text-blue-500 hover:text-blue-700 transition">
                                                <FiEdit2 />
                                            </button>
                                            <button onClick={() => handleDeleteBlog(blog?._id)} className="text-red-500 hover:text-red-700 transition">
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
            case 'Gallery':
                return (
                    <div className="p-6 bg-gray-100 min-h-screen">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Add Image to Gallery</h3>
                        <form onSubmit={handleSubmit(onSubmitImage)} className="bg-white shadow-md p-6 rounded-lg mb-6">
                            <input
                                type='URL'
                                {...register("imageUrl", { required: true })}
                                placeholder='Enter Img URL'
                                className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                            />
                            {errors.imageUrl && <p className="text-red-500 text-sm">Image is required</p>}

                            <button type="submit" className="bg-blue-950 text-white p-3 mt-4 w-full hover:bg-blue-900 transition">
                                Upload Image
                            </button>
                        </form>

                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Gallery</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {GalleryPage.length > 0 ? (
                                GalleryPage?.map((image, index) => (
                                    <div key={index} className="relative bg-white p-2 shadow-md rounded-lg">
                                        <img src={image?.GalleryImg} alt="Gallery" className="w-full h-32 object-cover rounded-lg" />
                                        <button
                                            onClick={() => handleDeleteGallery(image?._id)}
                                            className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition">
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center col-span-full">No images uploaded yet.</p>
                            )}
                        </div>
                    </div>
                );
            default:
                return <div>Select a page from the sidebar.</div>;
        }
    };

    return (
        <div className="flex h-screen">
            <ToastContainer />
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
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Special Appointment" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Special Appointment")}>
                        <FaCalendar /> Special Appointments
                    </li>
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Facilities" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Facilities")}>
                        <FaHospital /> Facilities
                    </li>
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Blog" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Blog")}>
                        <FaBlog /> Blog
                    </li>
                    <li className={`mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400 ${activePage === "Gallery" ? "text-gray-200" : ""}`} onClick={() => handlePageChange("Gallery")}>
                        <RiGalleryFill /> Gallery
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