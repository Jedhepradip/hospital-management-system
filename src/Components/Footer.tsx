// // import { Link } from "react-router-dom";

// // const Footer = () => {
// //     return (
// //         // <footer className="bg-blue-900 text-white py-8 md:px-24 px-7">
// //         //     <div className="container mx-auto flex flex-col items-center md:text-left md:items-start">
// //         //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
// //         //             <div className="mb-6">
// //         //                 <h2 className="text-3xl font-bold text-white">Palwe Hospital</h2>
// //         //                 <p className="text-gray-300 mt-2 max-w-md">
// //         //                     Dedicated to providing quality healthcare with compassion and care.
// //         //                 </p>                        
// //         //             </div>
// //         //             <div>
// //         //                 <h3 className="text-lg font-semibold mb-2 text-white">Quick Links</h3>
// //         //                 <ul className="space-y-2">
// //         //                     {["Home", "About Us", "Our Doctors", "Departments", "Contact Us"].map((item, index) => (
// //         //                         <li key={index}>
// //         //                             <Link to="/" className="text-gray-300 hover:text-white transition">
// //         //                                 {item}
// //         //                             </Link>
// //         //                         </li>
// //         //                     ))}
// //         //                 </ul>
// //         //             </div>

// //         //             {/* Services Section */}
// //         //             <div>
// //         //                 <h3 className="text-lg font-semibold mb-2 text-white">Our Services</h3>
// //         //                 <ul className="space-y-2">
// //         //                     {["Emergency Care", "Surgery", "Diagnostics", "Pharmacy", "Wellness Programs"].map((service, index) => (
// //         //                         <li key={index}>
// //         //                             <Link to="/" className="text-gray-300 hover:text-white transition">
// //         //                                 {service}
// //         //                             </Link>
// //         //                         </li>
// //         //                     ))}
// //         //                 </ul>
// //         //             </div>

// //         //             {/* Contact Info */}
// //         //             <div>
// //         //                 <h3 className="text-lg font-semibold mb-2 text-white">Get in Touch</h3>
// //         //                 <p className="text-gray-300">📍 123 Hospital Street, City, Country</p>
// //         //                 <p className="text-gray-300">📞 +0-000-000-000</p>
// //         //                 <p className="text-gray-300">📧 info@palwehospital.com</p>
// //         //             </div>
// //         //         </div>
// //         //     </div>

// //         //     {/* Copyright */}
// //         //     <div className="text-center border-t border-gray-700 mt-6 pt-4 text-gray-400 text-sm">
// //         //         © 2024 Palwe Hospital - All Rights Reserved.
// //         //     </div>
// //         // </footer>

// //         <footer className="bg-gray-900 text-white py-8">
// //             <div className="container mx-auto px-4">
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                     {/* Department Section */}
// //                     <div>
// //                         <h2 className="text-lg font-semibold mb-2">Department</h2>
// //                         <ul className="space-y-2 text-sm">
// //                             <li>Surgery</li>
// //                             <li>Women's Health</li>
// //                             <li>Radiology</li>
// //                             <li>Cardiology</li>
// //                             <li>Medicine</li>
// //                             <li>Support</li>
// //                         </ul>
// //                     </div>

// //                     {/* Company Section */}
// //                     <div>
// //                         <h2 className="text-lg font-semibold mb-2">Company</h2>
// //                         <ul className="space-y-2 text-sm">
// //                             <li>Terms & Conditions</li>
// //                             <li>Privacy Policy</li>
// //                             <li>Company Support</li>
// //                             <li>FAQ Questions</li>
// //                             <li>Company License</li>
// //                         </ul>
// //                     </div>

// //                     {/* Contact Section */}
// //                     <div>
// //                         <h2 className="text-lg font-semibold mb-2">Get in Touch</h2>
// //                         <p className="text-sm">Support Available 24/7</p>
// //                         <p className="text-sm">Email: support@email.com</p>
// //                         <p className="text-sm">Mon - Fri: 08:30 - 18:00</p>
// //                         <p className="text-sm">Phone: +23-456-6588</p>
// //                     </div>
// //                 </div>

// //                 <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
// //                     <p>Copyright © 2021, Designed & Developed by Themefisher</p>
// //                     <p className="mt-2">Your Email address</p>
// //                 </div>
// //             </div>
// //         </footer>

// //     );
// // };

// // export default Footer;


// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-blue-200 text-gray-800 py-10">
//       <div className="container mx-auto px-4">
//         {/* Footer Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-400">
//           {/* Department Section */}
//           <div>
//             <h2 className="text-lg font-semibold mb-3">Department</h2>
//             <ul className="space-y-2 text-sm">
//               <li>Surgery</li>
//               <li>Women's Health</li>
//               <li>Radiology</li>
//               <li>Cardiology</li>
//               <li>Medicine</li>
//               <li>Support</li>
//             </ul>
//           </div>

//           {/* Company Section */}
//           <div>
//             <h2 className="text-lg font-semibold mb-3">Company</h2>
//             <ul className="space-y-2 text-sm">
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//               <li>Company Support</li>
//               <li>FAQ Questions</li>
//               <li>Company License</li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h2 className="text-lg font-semibold mb-3">Get in Touch</h2>
//             <p className="text-sm">Support Available 24/7</p>
//             <p className="text-sm">Email: support@email.com</p>
//             <p className="text-sm">Mon - Fri: 08:30 - 18:00</p>
//             <p className="text-sm">Phone: +23-456-6588</p>
//           </div>
//         </div>

//         {/* Social Media & Subscription Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between mt-6">
//           {/* Social Media Icons */}
//           <div className="flex space-x-4">
//             <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
//             <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:text-blue-600" />
//             <FaLinkedin className="text-blue-700 text-2xl cursor-pointer hover:text-blue-900" />
//             <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:text-pink-700" />
//           </div>

//           {/* Email Subscription Box */}
//           <div className="mt-4 md:mt-0">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 rounded-md border border-gray-400 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-6 text-center text-sm">
//           <p>Copyright © 2021, Designed & Developed by Themefisher</p>
//           <p className="mt-2">Your Email Address</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-gray-800 py-10">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-8 border-b border-gray-400">
          {/* Department Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Department</h2>
            <ul className="space-y-2 text-sm">
              <li>Surgery</li>
              <li>Women's Health</li>
              <li>Radiology</li>
              <li>Cardiology</li>
              <li>Medicine</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Company Support</li>
              <li>FAQ Questions</li>
              <li>Company License</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Get in Touch</h2>
            <p className="text-sm">Support Available 24/7</p>
            <p className="text-sm">Email: support@email.com</p>
            <p className="text-sm">Mon - Fri: 08:30 - 18:00</p>
            <p className="text-sm">Phone: +23-456-6588</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Press & Media</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Subscribe</h2>
            <p className="text-sm mb-2">Stay updated with our latest news.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
            <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:text-blue-600" />
            <FaLinkedin className="text-blue-700 text-2xl cursor-pointer hover:text-blue-900" />
            <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:text-pink-700" />
            <FaYoutube className="text-red-600 text-2xl cursor-pointer hover:text-red-800" />
          </div>

          {/* Footer Bottom */}
          <div className="text-center text-sm mt-4 md:mt-0">
            <p>Copyright © 2021, Designed & Developed by Themefisher</p>
            <p>Your Email Address</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
