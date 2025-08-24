// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect scroll and change navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll function
//   const handleMenuItemClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsOpen(false);

//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const menuItems = [
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "experience", label: "Experience" },
//     { id: "work", label: "Projects" },
//     { id: "education", label: "Education" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
//         }`}
//     >
//       <div className="text-white py-5 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-lg font-semibold cursor-pointer">
//           <span className="text-[#8245ec]">&lt;</span>
//           <span className="text-white">Biplab</span>
//           <span className="text-[#8245ec]">/</span>
//           <span className="text-white">Mahato</span>
//           <span className="text-[#8245ec]">&gt;</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-300">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
//                 }`}
//             >
//               <button onClick={() => handleMenuItemClick(item.id)}>
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Social Icons */}
//         <div className="hidden md:flex space-x-4">
//           <a
//             href="https://github.com/biplabmahato"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaGithub size={24} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/biplab-mahato-68b34a247"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-[#8245ec]"
//           >
//             <FaLinkedin size={24} />
//           </a>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           {isOpen ? (
//             <FiX
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           ) : (
//             <FiMenu
//               className="text-3xl text-[#8245ec] cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Items */}
//       {isOpen && (
//         <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
//           <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
//             {menuItems.map((item) => (
//               <li
//                 key={item.id}
//                 className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""
//                   }`}
//               >
//                 <button onClick={() => handleMenuItemClick(item.id)}>
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//             <div className="flex space-x-4">
//               <a
//                 href="https://github.com/biplabmahato"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaGithub size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/biplab-mahato-68b34a247"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//             </div>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "experience", label: "Experience", icon: "🚀" },
    { id: "work", label: "Projects", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
  ];

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes slide-down {
          0% { transform: translateY(-100%) translateX(-50%) scale(0.9); opacity: 0; }
          100% { transform: translateY(0) translateX(-50%) scale(1); opacity: 1; }
        }
        
        .animate-gradient { 
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-slide-down { animation: slide-down 0.5s ease-out; }
        
        .glass-navbar {
          background: rgba(5, 4, 20, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .menu-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-item::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8245ec, #ec4899);
          transition: width 0.3s ease;
        }
        
        .menu-item:hover::before,
        .menu-item.active::before {
          width: 100%;
        }
        
        .social-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-icon:hover {
          transform: translateY(-2px) scale(1.1);
        }
      `}</style>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled 
            ? "glass-navbar shadow-lg" 
            : "bg-transparent"
        }`}
        style={{
          background: isScrolled 
            ? `rgba(5, 4, 20, 0.85)` 
            : `linear-gradient(135deg, 
                rgba(130, 69, 236, 0.1) 0%, 
                rgba(236, 72, 153, 0.05) 50%, 
                transparent 100%)`
        }}
      >
        <div className="text-white py-6 flex justify-between items-center relative z-10">
          {/* Enhanced Logo */}
          <div className="text-xl font-bold cursor-pointer relative group">
            <div className="relative inline-block">
              <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 text-2xl">
                &lt;
              </span>
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent font-black group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-300">
                Biplab
              </span>
              <span className="text-pink-400 group-hover:text-pink-300 transition-colors duration-300 text-2xl">
                /
              </span>
              <span className="bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 bg-clip-text text-transparent font-black group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                Mahato
              </span>
              <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 text-2xl">
                &gt;
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`menu-item cursor-pointer relative group ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300 group-hover:text-white"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-semibold">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Enhanced Social Icons */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="https://github.com/biplabmahato"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-300 hover:text-purple-400 p-2 rounded-full hover:bg-white/5 relative group"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/biplab-mahato-68b34a247"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-300 hover:text-blue-400 p-2 rounded-full hover:bg-white/5 relative group"
            >
              <FaLinkedin size={24} />
            </a>
            
            {/* Decorative Element */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent ml-2" />
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Available for work</span>
            </div>
          </div>

          {/* Enhanced Mobile Menu Icon */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 group"
            >
              {isOpen ? (
                <FiX className="text-2xl text-purple-400 group-hover:text-white transition-colors duration-300" />
              ) : (
                <FiMenu className="text-2xl text-purple-400 group-hover:text-white transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md glass-navbar rounded-3xl shadow-2xl animate-slide-down border border-white/10 md:hidden overflow-hidden">
            {/* Menu Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-blue-900/20 animate-gradient" />
            
            <ul className="relative flex flex-col space-y-2 p-6 text-gray-300">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  className="relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button 
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 group hover:bg-white/5 ${
                      activeSection === item.id ? "bg-purple-500/20 text-purple-300" : "hover:text-white"
                    }`}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-semibold">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-white/10 mt-4">
                <a
                  href="https://github.com/biplabmahato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-300 hover:text-purple-400 p-3 rounded-full hover:bg-white/5 group relative"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/biplab-mahato-68b34a247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-300 hover:text-blue-400 p-3 rounded-full hover:bg-white/5 group relative"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}

        {/* Background Blur Overlay for Mobile Menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;

