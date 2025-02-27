// import { useState } from "react";
// import { FiMenu, FiUser } from "react-icons/fi";
// import { FaChartBar, FaUsers, FaClipboardList } from "react-icons/fa";
// // import { Card, CardContent } from "../components/ui/card";
// const Admin = () => {

//     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className={`bg-gray-800 text-white w-64 p-5 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
//                 <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
//                 <ul>
//                     <li className="mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400">
//                         <FaChartBar /> Dashboard
//                     </li>
//                     <li className="mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400">
//                         <FaUsers /> Users
//                     </li>
//                     <li className="mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400">
//                         <FaClipboardList /> Reports
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 flex flex-col">
//                 {/* Navbar */}
//                 <div className="bg-white p-4 shadow flex justify-between items-center">
//                     <FiMenu className="text-xl cursor-pointer md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
//                     <h2 className="text-lg font-semibold">Dashboard</h2>
//                     <FiUser className="text-xl cursor-pointer" />
//                 </div>

//                 {/* Dashboard Content */}
//                 <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <Card className="bg-white shadow p-5">
//                         {/* <CardContent> */}
//                             <h3 className="text-lg font-semibold">Total Users</h3>
//                             <p className="text-2xl font-bold">1,245</p>
//                         {/* </CardContent> */}
//                     </Card>
//                     <Card className="bg-white shadow p-5">
//                         <CardContent>
//                             <h3 className="text-lg font-semibold">New Orders</h3>
//                             <p className="text-2xl font-bold">320</p>
//                         </CardContent>
//                     </Card>
//                     <Card className="bg-white shadow p-5">
//                         <CardContent>
//                             <h3 className="text-lg font-semibold">Revenue</h3>
//                             <p className="text-2xl font-bold">$12,450</p>
//                         </CardContent>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Admin


import { useState } from "react";
import { FiMenu, FiUser } from "react-icons/fi";
import { FaChartBar, FaUsers, FaClipboardList } from "react-icons/fa";

const Admin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`bg-blue-950 text-white w-64 p-5 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
                <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
                <ul>
                    <li className="mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400">
                        <FaChartBar /> Dashboard
                    </li>
                    <li className="mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400">
                        <FaUsers /> Users
                    </li>
                    <li className="mb-4 flex items-center gap-3 cursor-pointer hover:text-gray-400">
                        <FaClipboardList /> Reports
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <div className="bg-white p-4 shadow flex justify-between items-center">
                    <FiMenu className="text-xl cursor-pointer md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                    <h2 className="text-lg font-semibold">Dashboard</h2>
                    <FiUser className="text-xl cursor-pointer" />
                </div>

                {/* Dashboard Content */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow p-5 rounded-lg">
                        <h3 className="text-lg font-semibold">Total Users</h3>
                        <p className="text-2xl font-bold">1,245</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow p-5 rounded-lg">
                        <h3 className="text-lg font-semibold">New Orders</h3>
                        <p className="text-2xl font-bold">320</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow p-5 rounded-lg">
                        <h3 className="text-lg font-semibold">Revenue</h3>
                        <p className="text-2xl font-bold">$12,450</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
