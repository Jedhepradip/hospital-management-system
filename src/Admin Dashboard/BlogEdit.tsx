import React, { useState, useEffect } from "react";
import { Blog } from "../Redux Toolkit/Features/Blog";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Redux Toolkit/Store/store";
import { FetchingBlogData } from "../Redux Toolkit/Features/Blog";

interface BlogEditProps {
    BlogId: string; // Allow `blog` to be optional
    onCancel: () => void;
}

const BlogEdit: React.FC<BlogEditProps> = ({ BlogId, onCancel }) => {
    const [formData, setFormData] = useState<Blog>();
    const dispatch = useAppDispatch();
    const AllBLog = useSelector((state: RootState) => state.Blog.AllBlog);

    useEffect(() => {
        dispatch(FetchingBlogData())
    }, [dispatch])

    useEffect(() => {
        if (AllBLog.length > 0) {
            setFormData(AllBLog.find((item) => item._id === BlogId));
        }
    }, [AllBLog, BlogId, formData])


    const handleChange = async () => {

    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // onSave(formData);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4 text-center">Edit Blog Post</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={formData?.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="category"
                        value={formData?.category}
                        onChange={handleChange}
                        placeholder="Category"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="hospital"
                        value={formData?.hospital}
                        onChange={handleChange}
                        placeholder="Hospital Name"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData?.date}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        name="description"
                        value={formData?.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full p-2 border rounded h-24"
                    ></textarea>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData?.imageUrl}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="readMoreLink"
                        value={formData?.readMoreLink}
                        onChange={handleChange}
                        placeholder="Read More Link"
                        className="w-full p-2 border rounded"
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-400 text-white rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogEdit;
