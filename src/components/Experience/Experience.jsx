// import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* Company Logo/Image */}
//                 <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;











import React, { useState, useEffect } from "react";
import { experiences } from "../../constants";

const Experience = () => {
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

    const elements = document.querySelectorAll('.experience-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-40 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(-8px) translateX(-5px); }
          75% { transform: translateY(-12px) translateX(3px); }
        }
        
        @keyframes pulse-line {
          0%, 100% { 
            background: linear-gradient(180deg, rgba(147, 51, 234, 0.8) 0%, rgba(236, 72, 153, 0.8) 100%);
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          }
          50% { 
            background: linear-gradient(180deg, rgba(236, 72, 153, 0.8) 0%, rgba(59, 130, 246, 0.8) 100%);
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.7);
          }
        }
        
        @keyframes glow-circle {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(130, 69, 236, 0.6), inset 0 0 20px rgba(130, 69, 236, 0.2);
          }
          50% { 
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.8), inset 0 0 30px rgba(236, 72, 153, 0.3);
          }
        }
        
        @keyframes slide-in-left {
          0% { transform: translateX(-100px) translateY(20px); opacity: 0; }
          100% { transform: translateX(0) translateY(0); opacity: 1; }
        }
        
        @keyframes slide-in-right {
          0% { transform: translateX(100px) translateY(20px); opacity: 0; }
          100% { transform: translateX(0) translateY(0); opacity: 1; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes skill-pop {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-line { animation: pulse-line 3s ease-in-out infinite; }
        .animate-glow-circle { animation: glow-circle 2s ease-in-out infinite; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-gradient { 
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-skill-pop { animation: skill-pop 0.5s ease-out; }
        
        .glass-effect {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .experience-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .experience-card:hover {
          transform: translateY(-12px) scale(1.03);
        }
      `}</style>

      <section
        id="experience"
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
        {/* Floating Particles */}
        <FloatingParticles />
        
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Enhanced Section Title */}
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient mb-6">
            EXPERIENCE
          </h2>
          <div className="relative mx-auto w-40 h-2 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse-line" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-gradient blur-sm" />
          </div>
          <p className="text-gray-300 text-xl font-semibold max-w-3xl mx-auto leading-relaxed">
            A journey through my professional experiences and the{" "}
            <span className="text-blue-400 font-bold">innovative solutions</span>{" "}
            I've contributed to various organizations
          </p>
        </div>

        {/* Enhanced Experience Timeline */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full animate-pulse-line rounded-full"></div>

          {/* Experience Entries */}
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              data-index={index}
              className={`experience-item relative flex flex-col sm:flex-row items-start sm:items-center mb-20 ${
                index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              } ${
                visibleItems.has(index.toString()) 
                  ? index % 2 === 0 
                    ? 'animate-slide-in-left' 
                    : 'animate-slide-in-right'
                  : 'opacity-0'
              }`}
            >
              {/* Enhanced Timeline Circle */}
              <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex justify-center items-center z-20 animate-glow-circle">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/30">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div
                className={`experience-card w-full sm:max-w-lg glass-effect rounded-3xl shadow-2xl border border-white/20 overflow-hidden ${
                  index % 2 === 0 ? "sm:mr-12" : "sm:ml-12"
                } ml-20 sm:ml-0`}
                style={{ 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(147, 51, 234, 0.2)',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Card Header with Gradient */}
                <div className="relative p-6 pb-4 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-gradient" />
                  
                  <div className="relative flex items-start space-x-4">
                    {/* Company Logo */}
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 flex-shrink-0">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Role and Company Info */}
                    <div className="flex-grow min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                        {experience.role}
                      </h3>
                      <h4 className="text-base sm:text-lg text-blue-300 font-semibold mb-2">
                        {experience.company}
                      </h4>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/30">
                        <span className="text-sm text-purple-200 font-medium">📅 {experience.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative p-6 pt-4">
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                    {experience.desc}
                  </p>

                  {/* Enhanced Skills Section */}
                  <div className="space-y-3">
                    <h5 className="font-bold text-white text-lg flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></span>
                      Technologies & Skills
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="animate-skill-pop relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-100 border border-purple-400/40 hover:border-purple-300 hover:scale-105 transition-all duration-300 cursor-default"
                          style={{ 
                            animationDelay: `${skillIndex * 0.1}s`,
                            boxShadow: '0 0 15px rgba(147, 51, 234, 0.3)'
                          }}
                        >
                          <span className="relative z-10">{skill}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Connecting Line Animation */}
              <div 
                className={`hidden sm:block absolute top-1/2 w-12 h-0.5 bg-gradient-to-r ${
                  index % 2 === 0 
                    ? 'right-12 from-purple-500 to-transparent' 
                    : 'left-12 from-transparent to-purple-500'
                } animate-pulse`}
                style={{ 
                  transform: 'translateY(-50%)',
                  animationDelay: `${index * 0.3}s`
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      </section>
    </>
  );
};

export default Experience;
