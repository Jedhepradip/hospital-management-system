import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from "./Pages/HomePages"
import About from "./Pages/AboutPages"
import Contact from "./Pages/ContactPages"
import Doctors from "./Pages/AllDoctorsPages"
import SigninPages from './Auto/SigninPages'
import SignupPages from './Auto/SingupPages'
import SpecialityPage from './Pages/SpecialityPage'
import TopDoctorsList from './Pages/TopDoctorsList'
import BookAppointment from './Pages/BookAppointment'
import DoctoreAboutPage from './Pages/DoctoreAboutPage'
import ForgetPassword from './Auto/FrogetPassword'
import FacilitiesPage from './Pages/FacilitiesPage'
import BlogPage from './Pages/BlogPage'
import GalleryPages from './Pages/GalleryPages'
import Appointment from "./Pages/Appointment"
import Admin from './Admin Dashboard/Admin'


const Layout: React.FC = () => {
  const location = useLocation();

  // Hide Navbar on Signin and Signup pages
  const hideNavbar = location.pathname === "/SigninPages" || location.pathname === "/SignupPages" || location.pathname === "/Admin" || location.pathname === "/ForgetPassword";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/BlogPage' element={<BlogPage />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Doctors' element={<Doctors />} />
        <Route path='/SigninPages' element={<SigninPages />} />
        <Route path='/SignupPages' element={<SignupPages />} />
        <Route path='/FacilitiesPage' element={<FacilitiesPage />} />
        <Route path='/Speciality' element={<SpecialityPage />} />
        <Route path='/GalleryPages' element={<GalleryPages />} />
        <Route path='/TopDoctors' element={<TopDoctorsList />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
        <Route path='/DoctoreAboutPage' element={<DoctoreAboutPage />} />
        <Route path='/BookAppointment' element={<BookAppointment />} />
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
