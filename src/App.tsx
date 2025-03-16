import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { ClerkProvider } from "@clerk/clerk-react";
import { useAppDispatch, RootState } from "./Redux Toolkit/Store/store";
import { useSelector } from "react-redux";
import { FetchingUserData } from "./Redux Toolkit/Features/User";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePages";
import About from "./Pages/AboutPages";
import Contact from "./Pages/ContactPages";
import Doctors from "./Pages/AllDoctorsPages";
import SigninPages from "./Auto/SigninPages";
import SignupPages from "./Auto/SingupPages";
import SpecialityPage from "./Pages/SpecialityPage";
import TopDoctorsList from "./Pages/TopDoctorsList";
import BookAppointment from "./Pages/BookAppointment";
import DoctoreAboutPage from "./Pages/DoctoreAboutPage";
import ForgetPassword from "./Auto/FrogetPassword";
import FacilitiesPage from "./Pages/FacilitiesPage";
import BlogPage from "./Pages/BlogPage";
import GalleryPages from "./Pages/GalleryPages";
import Appointment from "./Pages/Appointment";
import Admin from "./Admin Dashboard/Admin";
import ProfilePage from "./Pages/ProfilePage";
import NotFoundPage from "./Pages/NotFoundPage";
import axios from "axios";
import { useUser } from "@clerk/clerk-react"

// Component to manage Navbar and Footer visibility
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const userData = useSelector((state: RootState) => state.User);

  const { user } = useUser();

  useEffect(() => {
    if (userData) {
      setIsAdmin(userData.isAdmin);
    }
  }, [userData]);

  useEffect(() => {
    dispatch(FetchingUserData());
  }, [dispatch]);

  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Clerk Publishable Key");
  }
  console.log("user pradip", user?.id);

  useEffect(() => {
    const FetchingUserData = async () => {
      if (!user) {
        return
      }
      console.log("okokok");
      
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api-user/user/${user?.id}`, {
        });
        console.log("response.data :", response.data);

        setIsAdmin(response.data?.isAdmin) // Ensure response.data matches the expected structure
      } catch (error) {
        console.error("Error fetching all appointments:", error);
      }
    };
    FetchingUserData();
  }, [user, user?.id])

  console.log(isAdmin);
  
  return (
    <>
      <Router>
        <Routes>
          {isAdmin === true ? (
            // If admin, show only the Admin page
            <>
              <Route path="/" element={<Admin />} />
              <Route path="*" element={<NotFoundPage />} />
            </>
          ) : (
            // If not admin, show all other routes
            <>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/About" element={<Layout><About /></Layout>} />
              <Route path="/BlogPage" element={<Layout><BlogPage /></Layout>} />
              <Route path="/Contact" element={<Layout><Contact /></Layout>} />
              <Route path="/Doctors" element={<Layout><Doctors /></Layout>} />
              <Route path="/SigninPages" element={<SigninPages />} />
              <Route path="/SignupPages" element={<SignupPages />} />
              <Route path="/FacilitiesPage" element={<Layout><FacilitiesPage /></Layout>} />
              <Route path="/Speciality" element={<Layout><SpecialityPage /></Layout>} />
              <Route path="/GalleryPages" element={<Layout><GalleryPages /></Layout>} />
              <Route path="/TopDoctors" element={<Layout><TopDoctorsList /></Layout>} />
              <Route path="/Appointment" element={<Layout><Appointment /></Layout>} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route path="/ProfilePage" element={<Layout><ProfilePage /></Layout>} />
              <Route path="/DoctoreAboutPage" element={<Layout><DoctoreAboutPage /></Layout>} />
              <Route path="/BookAppointment" element={<Layout><BookAppointment /></Layout>} />

              {/* Redirect /Admin to Home for non-admins */}
              <Route path="/Admin" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default App;
