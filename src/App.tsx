// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Home from "./Pages/HomePages";
// import About from "./Pages/AboutPages";
// import Contact from "./Pages/ContactPages";
// import Doctors from "./Pages/AllDoctorsPages";
// import SigninPages from "./Auto/SigninPages";
// import SignupPages from "./Auto/SingupPages";
// import SpecialityPage from "./Pages/SpecialityPage";
// import TopDoctorsList from "./Pages/TopDoctorsList";
// import BookAppointment from "./Pages/BookAppointment";
// import DoctoreAboutPage from "./Pages/DoctoreAboutPage";
// import ForgetPassword from "./Auto/FrogetPassword";
// import FacilitiesPage from "./Pages/FacilitiesPage";
// import BlogPage from "./Pages/BlogPage";
// import GalleryPages from "./Pages/GalleryPages";
// import Appointment from "./Pages/Appointment";
// import Admin from "./Admin Dashboard/Admin";

// const Layout: React.FC = () => {
//   const location = useLocation();

//   // Hide Navbar on specific pages
//   const hideNavbar =
//     location.pathname === "/SigninPages" ||
//     location.pathname === "/SignupPages" ||
//     location.pathname === "/Admin" ||
//     location.pathname === "/ForgetPassword";

//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/BlogPage" element={<BlogPage />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Doctors" element={<Doctors />} />
//         <Route path="/SigninPages" element={<SigninPages />} />
//         <Route path="/SignupPages" element={<SignupPages />} />
//         <Route path="/FacilitiesPage" element={<FacilitiesPage />} />
//         <Route path="/Speciality" element={<SpecialityPage />} />
//         <Route path="/GalleryPages" element={<GalleryPages />} />
//         <Route path="/TopDoctors" element={<TopDoctorsList />} />
//         <Route path="/appointment" element={<Appointment />} />
//         <Route path="/Admin" element={<Admin />} />
//         <Route path="/ForgetPassword" element={<ForgetPassword />} />
//         <Route path="/DoctoreAboutPage" element={<DoctoreAboutPage />} />
//         <Route path="/BookAppointment" element={<BookAppointment />} />
//       </Routes>
//       {!hideNavbar && <Footer />}
//     </>
//   );
// };

// const App: React.FC = () => {

//   const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

//   if (!PUBLISHABLE_KEY) {
//     throw new Error("Missing Publishable Key")
//   }

//   return (
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
//       <Router>
//         {/* Authentication Header */}
//         <header className="p-4 bg-gray-200 flex justify-between">
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </header>

//         {/* App Layout with Routing */}
//         <Layout />
//       </Router>
//     </ClerkProvider>
//   );
// };

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Home from "./Pages/HomePages";
// import About from "./Pages/AboutPages";
// import Contact from "./Pages/ContactPages";
// import Doctors from "./Pages/AllDoctorsPages";
// import SigninPages from "./Auto/SigninPages";
// import SignupPages from "./Auto/SingupPages";
// import SpecialityPage from "./Pages/SpecialityPage";
// import TopDoctorsList from "./Pages/TopDoctorsList";
// import BookAppointment from "./Pages/BookAppointment";
// import DoctoreAboutPage from "./Pages/DoctoreAboutPage";
// import ForgetPassword from "./Auto/FrogetPassword";
// import FacilitiesPage from "./Pages/FacilitiesPage";
// import BlogPage from "./Pages/BlogPage";
// import GalleryPages from "./Pages/GalleryPages";
// import Appointment from "./Pages/Appointment";
// import Admin from "./Admin Dashboard/Admin";



// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

// const App: React.FC = () => {

//   const location = useLocation();

//   // Hide Navbar on specific pages
//   const hideNavbar =
//     location.pathname === "/SigninPages" ||
//     location.pathname === "/SignupPages" ||
//     location.pathname === "/Admin" ||
//     location.pathname === "/ForgetPassword";

//   return (
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//       {!hideNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/BlogPage" element={<BlogPage />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Doctors" element={<Doctors />} />
//         <Route path="/SigninPages" element={<SigninPages />} />
//         <Route path="/SignupPages" element={<SignupPages />} />
//         <Route path="/FacilitiesPage" element={<FacilitiesPage />} />
//         <Route path="/Speciality" element={<SpecialityPage />} />
//         <Route path="/GalleryPages" element={<GalleryPages />} />
//         <Route path="/TopDoctors" element={<TopDoctorsList />} />
//         <Route path="/appointment" element={<Appointment />} />
//         <Route path="/Admin" element={<Admin />} />
//         <Route path="/ForgetPassword" element={<ForgetPassword />} />
//         <Route path="/DoctoreAboutPage" element={<DoctoreAboutPage />} />
//         <Route path="/BookAppointment" element={<BookAppointment />} />
//       </Routes>
//       {!hideNavbar && <Footer />}
//     </>
//     </ClerkProvider >
//   );
// };

// const ProtectedRoute: React.FC = () => {
//   return (
//     <>
//       <SignedIn>
//         <AdminDashboard />
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
// , SignedIn, SignedOut, RedirectToSignIn 
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


// Component to manage Navbar and Footer visibility
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Pages where Navbar and Footer should be hidden
  const hideNavbarAndFooter = ["/SigninPages", "/SignupPages", "/Admin", "/ForgetPassword"].includes(location.pathname);

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      {children}
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  console.log("PUBLISHABLE_KEY", PUBLISHABLE_KEY);

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key 111");
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/BlogPage" element={<BlogPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Doctors" element={<Doctors />} />
            <Route path="/SigninPages" element={<SigninPages />} />
            <Route path="/SignupPages" element={<SignupPages />} />
            <Route path="/FacilitiesPage" element={<FacilitiesPage />} />
            <Route path="/Speciality" element={<SpecialityPage />} />
            <Route path="/GalleryPages" element={<GalleryPages />} />
            <Route path="/TopDoctors" element={<TopDoctorsList />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/DoctoreAboutPage" element={<DoctoreAboutPage />} />
            <Route path="/BookAppointment" element={<BookAppointment />} />
          </Routes>
        </Layout>
      </Router>
    </ClerkProvider>
  );
};

export default App;
