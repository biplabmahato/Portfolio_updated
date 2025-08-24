// // src/components/Skills/Skills.jsx
// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";
// import ReactTypingEffect from 'react-typing-effect';

// const Skills = () => (
//   <section
//     id="skills"
//     className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
//   >
//     {/* Section Title */}
//     <div className="text-center mb-8">
//       <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
//       <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//       <p className="text-gray-400 mt-4 text-lg font-semibold">
//       A collection of my technical skills and expertise honed through various projects and experiences
//       </p>
//     </div>

//     {/* Skill Categories */}
//     <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
//       {SkillsInfo.map((category) => (
//         <div
//           key={category.title}
//           className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
//           shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
//         >
//           <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
//             {category.title}
//           </h3>

//           {/* Skill Items - 3 per row on larger screens */}
//           <Tilt
//             key={category.title}
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//               {category.skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
//                 >
//                   <img
//                     src={skill.logo}
//                     alt={`${skill.name} logo`}
//                     className="w-6 h-6 sm:w-8 sm:h-8"
//                   />
//                   <span className="text-xs sm:text-sm text-gray-300">
//                     {skill.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </Tilt>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;




import React, { useState, useEffect } from "react";
import { SkillsInfo } from "../../constants";
import ReactTypingEffect from 'react-typing-effect';

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCategories, setVisibleCategories] = useState(new Set());
  const [activeSkill, setActiveSkill] = useState(null);

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
            setVisibleCategories(prev => new Set(prev).add(entry.target.dataset.category));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.skill-category');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-30 animate-float"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );

  // Animated code snippets
  const CodeRain = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-green-400 text-xs font-mono animate-code-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${5 + Math.random() * 3}s`,
          }}
        >
          {['console.log()', 'function()', 'const x =', 'import React', 'useState()', 'useEffect()'][Math.floor(Math.random() * 6)]}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Custom CSS for crazy animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-15px) translateX(-10px) rotate(180deg); }
          75% { transform: translateY(-25px) translateX(5px) rotate(270deg); }
        }
        
        @keyframes code-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(130, 69, 236, 0.4), 0 0 40px rgba(130, 69, 236, 0.2);
            border-color: rgba(130, 69, 236, 0.6);
          }
          50% { 
            box-shadow: 0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(236, 72, 153, 0.3);
            border-color: rgba(236, 72, 153, 0.8);
          }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes skill-bounce {
          0% { transform: scale(0.8) rotate(-5deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes category-slide {
          0% { transform: translateY(50px) rotateX(-10deg); opacity: 0; }
          100% { transform: translateY(0) rotateX(0deg); opacity: 1; }
        }
        
        @keyframes skill-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(130, 69, 236, 0.3); }
          50% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.5), 0 0 30px rgba(59, 130, 246, 0.3); }
        }
        
        @keyframes text-rainbow {
          0% { color: #8b5cf6; }
          16.66% { color: #ec4899; }
          33.33% { color: #3b82f6; }
          50% { color: #10b981; }
          66.66% { color: #f59e0b; }
          83.33% { color: #ef4444; }
          100% { color: #8b5cf6; }
        }
        
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-code-fall { animation: code-fall 8s linear infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-skill-bounce { animation: skill-bounce 0.6s ease-out; }
        .animate-category-slide { animation: category-slide 0.8s ease-out; }
        .animate-skill-glow { animation: skill-glow 2s ease-in-out infinite; }
        .animate-text-rainbow { animation: text-rainbow 3s ease-in-out infinite; }
        
        .glass-effect {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .skill-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .skill-item:hover {
          transform: translateY(-8px) scale(1.1) rotateZ(5deg);
        }
        
        .category-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .category-card:hover {
          transform: translateY(-10px) rotateX(5deg);
        }
        
        .hologram-effect {
          position: relative;
          overflow: hidden;
        }
        
        .hologram-effect::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.5s;
          opacity: 0;
        }
        
        .hologram-effect:hover::before {
          animation: hologram-sweep 1.5s ease-in-out;
          opacity: 1;
        }
        
        @keyframes hologram-sweep {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>

      <section
        id="skills"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(130, 69, 236, 0.2) 0%, 
            rgba(236, 72, 153, 0.15) 25%, 
            rgba(59, 130, 246, 0.1) 50%,
            transparent 70%),
            linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #312e81 60%, #1e293b 100%)
          `
        }}
      >
        {/* Animated Background Elements */}
        <FloatingParticles />
        <CodeRain />
        
        {/* Dynamic Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/6 left-1/6 w-72 h-72 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/6 right-1/6 w-96 h-96 bg-gradient-to-l from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-2xl animate-bounce" />
        </div>

        {/* Enhanced Section Title */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <ReactTypingEffect
              text={["SKILLS", "EXPERTISE", "TECHNOLOGIES", "ABILITIES"]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
              className="bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-green-400 bg-clip-text text-transparent animate-gradient"
            />
          </h2>
          <div className="relative mx-auto w-40 h-2 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-green-500 rounded-full animate-pulse-glow" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-green-500 rounded-full animate-gradient blur-sm" />
          </div>
          <p className="text-gray-300 text-xl font-semibold max-w-4xl mx-auto leading-relaxed">
            A comprehensive collection of{" "}
            <span className="text-purple-400 font-bold animate-text-rainbow">cutting-edge technologies</span>{" "}
            and expertise honed through{" "}
            <span className="text-pink-400 font-bold">innovative projects</span>{" "}
            and real-world applications
          </p>
        </div>

        {/* Enhanced Skill Categories */}
        <div className="flex flex-wrap gap-6 lg:gap-8 justify-center relative z-10">
          {SkillsInfo.map((category, categoryIndex) => (
            <div
              key={category.title}
              data-category={categoryIndex}
              className={`skill-category category-card glass-effect rounded-3xl border border-white/20 overflow-hidden hologram-effect ${
                visibleCategories.has(categoryIndex.toString()) 
                  ? 'animate-category-slide' 
                  : 'opacity-0'
              }`}
              style={{
                width: 'calc(50% - 1rem)',
                minWidth: '320px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(130, 69, 236, 0.3)',
                animationDelay: `${categoryIndex * 0.2}s`
              }}
              onMouseEnter={() => setActiveSkill(categoryIndex)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              {/* Category Header */}
              <div className="relative p-6 pb-4 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-blue-900/40">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-gradient" />
                <h3 className={`relative text-2xl sm:text-3xl font-black text-center ${
                  activeSkill === categoryIndex 
                    ? 'text-white animate-text-rainbow' 
                    : 'bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent'
                }`}>
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-3 rounded-full animate-pulse-glow" />
              </div>

              {/* Enhanced Skills Grid */}
              <div className="p-6 pt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="skill-item glass-effect rounded-2xl p-3 border border-purple-500/30 hover:border-pink-400/60 animate-skill-glow cursor-pointer group"
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`,
                        boxShadow: '0 8px 25px rgba(130, 69, 236, 0.2)'
                      }}
                      onMouseEnter={() => setActiveSkill(`${categoryIndex}-${skillIndex}`)}
                    >
                      {/* Skill Content */}
                      <div className="flex flex-col items-center space-y-2 relative">
                        <div className="relative">
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-125 transition-transform duration-300 relative z-10"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-200 font-semibold text-center group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        
                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 animate-gradient" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          ))}
        </div>

        {/* Enhanced Footer Effect */}
        <div className="mt-16 text-center relative z-10">
          <div className="inline-flex items-center space-x-4 px-8 py-4 glass-effect rounded-full border border-purple-500/30 animate-pulse-glow">
            <span className="text-purple-300 font-semibold">🚀 Continuously Learning</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping" />
            <span className="text-pink-300 font-semibold">Growing Every Day 🌟</span>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      </section>
    </>
  );
};

export default Skills;




