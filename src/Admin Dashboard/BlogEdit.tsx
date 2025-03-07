/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Blog } from "../Redux Toolkit/Features/Blog";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Redux Toolkit/Store/store";
import { FetchingBlogData } from "../Redux Toolkit/Features/Blog";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

interface BlogEditProps {
    BlogId: string; // Allow `blog` to be optional
    onCancel: () => void;
}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3YzY5MjExY2Q0ZTI0N2U5YjNjNjdiZCIsImVtYWlsIjoiUHJhZGlqZWRoZWRAZ2FpbC5jb20iLCJuYW1lIjoicHJhZGlwIn0.P2ovZ3fyS2Ml82puLqQbdVyg7EjY4F3iyVnG3izUosQ"

const BlogEdit: React.FC<BlogEditProps> = ({ BlogId, onCancel }) => {
    const [formData, setFormData] = useState<Blog>();
    const dispatch = useAppDispatch();
    const AllBLog = useSelector((state: RootState) => state.Blog.AllBlog);

    useEffect(() => {
        if (AllBLog.length > 0) {
            setFormData(AllBLog.find((item) => item._id === BlogId));
        }
    }, [AllBLog, BlogId, formData])

    const { register, handleSubmit } = useForm<Blog>();

    const onSubmitBlog: SubmitHandler<Blog> = async (data: Blog) => {
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
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api-blog/Blogrouter/update/${BlogId}`, formData, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`, // Send Bearer Token
                },
            });

            const JobsResponses = await response.data;

            if (response.status === 201 || response.status === 200) {
                toast.success(JobsResponses.message, { position: "top-right", autoClose: 3000 });
                onCancel();
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
        dispatch(FetchingBlogData())
    }, [dispatch, onSubmitBlog])

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <ToastContainer />
                <div onClick={() => onCancel()} className="flex bg-slate-200 justify-center p-1 items-center rounded-full float-right h-10 w-10  hover:bg-blue-950 hover:text-white text-2xl font-bold">
                    <RxCross2 />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Update Blog Post</h3>
                <form onSubmit={handleSubmit(onSubmitBlog)} className="bg-white shadow-md p-6 rounded-lg mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type='text'
                            {...register("category")}
                            placeholder="Category"
                            defaultValue={formData?.title}
                            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                        />

                        <input
                            typeof='date'
                            {...register("date")}
                            type="date"
                            defaultValue={formData?.date}
                            placeholder="Date"
                            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                        />

                        <input
                            type='text'
                            {...register("hospital")}
                            placeholder="Hospital"
                            defaultValue={formData?.hospital}
                            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                        />

                        <input
                            type='text'
                            {...register("title")}
                            placeholder="Title"
                            defaultValue={formData?.title}
                            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                        />

                        <input
                            type='URL'
                            {...register("imageUrl")}
                            placeholder="Image URL"
                            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                        />

                        <input type='link'
                            {...register("readMoreLink")}
                            placeholder="Read More Link"
                            defaultValue={formData?.readMoreLink}
                            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    <textarea
                        {...register("description")}
                        placeholder="Description"
                        defaultValue={formData?.description}
                        className="border p-3 rounded-lg w-full mt-4 focus:ring-2 focus:ring-blue-300"
                    ></textarea>

                    <button type="submit" className="bg-blue-950 text-white p-3 mt-4 w-full hover:bg-blue-900 transition">
                        Update Blog
                    </button>
                </form>
            </div>
        </>

    );
};

export default BlogEdit;
