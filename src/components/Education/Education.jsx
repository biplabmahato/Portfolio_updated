// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div> */}

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };





// export default Education;


import React, { useState, useEffect } from "react";
import { education } from "../../constants";

const Education = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleItems, setVisibleItems] = useState(new Set());

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.education-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Floating academic icons
  const FloatingIcons = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {['🎓', '📚', '✏️', '🔬', '💡', '📐'].map((icon, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-20 animate-float-academic"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-academic {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-25px) translateX(10px) rotate(5deg); }
          50% { transform: translateY(-15px) translateX(-10px) rotate(-5deg); }
          75% { transform: translateY(-30px) translateX(5px) rotate(3deg); }
        }
        
        @keyframes pulse-timeline {
          0%, 100% { 
            background: linear-gradient(180deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% { 
            background: linear-gradient(180deg, rgba(147, 51, 234, 0.8) 0%, rgba(236, 72, 153, 0.8) 100%);
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.7);
          }
        }
        
        @keyframes slide-in-left {
          0% { transform: translateX(-100px) translateY(30px); opacity: 0; }
          100% { transform: translateX(0) translateY(0); opacity: 1; }
        }
        
        @keyframes slide-in-right {
          0% { transform: translateX(100px) translateY(30px); opacity: 0; }
          100% { transform: translateX(0) translateY(0); opacity: 1; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float-academic { animation: float-academic 5s ease-in-out infinite; }
        .animate-pulse-timeline { animation: pulse-timeline 3s ease-in-out infinite; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-gradient { 
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .glass-effect {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .education-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .education-card:hover {
          transform: translateY(-15px) scale(1.03);
        }
        
        .grade-badge {
          position: relative;
          overflow: hidden;
        }
        
        .grade-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s;
        }
        
        .grade-badge:hover::before {
          left: 100%;
        }
      `}</style>

      <section
        id="education"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(147, 51, 234, 0.1) 25%, 
            transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1e293b 100%)
          `
        }}
      >
        {/* Floating Academic Icons */}
        <FloatingIcons />
        
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-2xl animate-bounce" />
        </div>

        {/* Enhanced Section Title */}
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient mb-6">
            EDUCATION
          </h2>
          <div className="relative mx-auto w-40 h-2 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full animate-pulse-timeline" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full animate-gradient blur-sm" />
          </div>
          <p className="text-gray-300 text-xl font-semibold max-w-4xl mx-auto leading-relaxed">
            My educational journey has been a path of{" "}
            <span className="text-blue-400 font-bold">continuous learning</span>{" "}
            and{" "}
            <span className="text-purple-400 font-bold">intellectual growth</span>,{" "}
            shaping my foundation in technology and innovation
          </p>
        </div>

        {/* Enhanced Education Timeline - No Circles */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full animate-pulse-timeline rounded-full"></div>

          {/* Education Entries */}
          {education.map((edu, index) => (
            <div
              key={edu.id}
              data-index={index}
              className={`education-item relative flex flex-col sm:flex-row items-start sm:items-center mb-20 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              } ${
                visibleItems.has(index.toString()) 
                  ? index % 2 === 0 
                    ? 'animate-slide-in-left' 
                    : 'animate-slide-in-right'
                  : 'opacity-0'
              }`}
            >
              {/* Enhanced Content Section - No Circle */}
              <div
                className={`education-card w-full sm:max-w-lg glass-effect rounded-3xl shadow-2xl border border-white/20 overflow-hidden ${
                  index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
                } ml-20 sm:ml-0`}
                style={{ 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.2)',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Card Header with Gradient */}
                <div className="relative p-6 pb-4 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-indigo-900/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient" />
                  
                  <div className="relative flex items-start space-x-4">
                    {/* School Logo */}
                    <div className="w-20 h-16 bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 flex-shrink-0 shadow-lg">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Degree and School Info */}
                    <div className="flex-grow min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-base sm:text-lg text-blue-300 font-semibold mb-3">
                        {edu.school}
                      </h4>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
                        <span className="text-sm text-blue-200 font-medium">📅 {edu.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative p-6 pt-4">
                  {/* Grade Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center space-x-2">
                      <span className="text-white font-semibold">🏆 Grade:</span>
                      <div className="grade-badge px-4 py-2 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full border border-green-400/40">
                        <span className="text-green-200 font-bold text-lg">{edu.grade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {edu.desc}
                  </p>

                  {/* Achievement Indicator */}
                  <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                    <span>Academic Achievement</span>
                  </div>
                </div>
              </div>

              {/* Connecting Line Animation */}
              <div 
                className={`hidden sm:block absolute top-1/2 w-12 h-0.5 bg-gradient-to-r ${
                  index % 2 === 0 
                    ? 'left-12 from-blue-500 to-transparent' 
                    : 'right-12 from-transparent to-blue-500'
                } animate-pulse`}
                style={{ 
                  transform: 'translateY(-50%)',
                  animationDelay: `${index * 0.3}s`
                }}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Footer */}
        <div className="mt-16 text-center relative z-10">
          <div className="inline-flex items-center space-x-4 px-8 py-4 glass-effect rounded-full border border-blue-500/30 animate-pulse-timeline">
            <span className="text-blue-300 font-semibold">🎓 Lifelong Learner</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping" />
            <span className="text-purple-300 font-semibold">Always Growing 📚</span>
          </div>
        </div>

        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      </section>
    </>
  );
};

export default Education;




