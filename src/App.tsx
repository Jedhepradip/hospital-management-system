import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Doctors' element={<Doctors />} />
        <Route path='/SigninPages' element={<SigninPages />} />
        <Route path='/SignupPages' element={<SignupPages />} />
        <Route path='/Speciality' element={<SpecialityPage />} />
        <Route path='/TopDoctors' element={<TopDoctorsList />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App