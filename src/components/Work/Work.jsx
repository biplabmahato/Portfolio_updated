import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-float"
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
          0%, 100% { transform: translateY(0px); }
          25% { transform: translateY(-20px); }
          50% { transform: translateY(-10px); }
          75% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(236, 72, 153, 0.3); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes border-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes modal-enter {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }
        .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
        .animate-modal-enter { animation: modal-enter 0.3s ease-out; }
        
        .glass-effect {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .modal-content {
          max-height: 90vh;
          overflow-y: auto;
        }

        /* Custom scrollbar for modal */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-content::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 4px;
        }
        
        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.5);
          border-radius: 4px;
        }
        
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.7);
        }
      `}</style>

      <section
        id="work"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.15) 0%, 
            rgba(236, 72, 153, 0.1) 25%, 
            transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
          `
        }}
      >
        {/* Animated Background Elements */}
        <FloatingParticles />
        
        {/* Geometric Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        {/* Section Title with Enhanced Effects */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient mb-4">
            PROJECTS
          </h2>
          <div className="relative mx-auto w-32 h-2 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-glow" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-gradient" />
          </div>
          <p className="text-gray-300 text-xl font-semibold max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative projects combining{" "}
            <span className="text-purple-400 font-bold">cybersecurity</span>,{" "}
            <span className="text-pink-400 font-bold">machine learning</span>, and{" "}
            <span className="text-blue-400 font-bold">cloud technologies</span>
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group relative project-card cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Border - No Rotation */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 animate-border-glow transition-opacity duration-300" />
              
              {/* Main Card */}
              <div className="relative glass-effect rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Container with Effects */}
                <div className="relative p-4 overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="relative px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-400 hover:text-purple-200 transition-all duration-300"
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating Action Indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-white text-sm font-bold">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal - Fixed Size and Position */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-enter">
            {/* Backdrop with Blur */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={handleCloseModal}
            />
            
            {/* Modal Content - Constrained to viewport */}
            <div className="relative glass-effect rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] animate-pulse-glow modal-content">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 animate-gradient rounded-3xl" />
              
              {/* Close Button */}
              <div className="relative flex justify-end p-6 flex-shrink-0">
                <button
                  onClick={handleCloseModal}
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
                >
                  ×
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="relative flex flex-col -mt-6 px-6 pb-6">
                {/* Enhanced Image Display */}
                <div className="w-full flex justify-center mb-6 flex-shrink-0">
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full max-w-2xl max-h-64 object-contain rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-50 blur-sm -z-10" />
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  {/* Enhanced Tags with Animation */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 border border-purple-400/50 hover:border-purple-300 hover:scale-105 transition-all duration-300 animate-pulse"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-700 hover:from-purple-800 hover:to-gray-800 text-gray-300 hover:text-white px-6 py-4 rounded-2xl text-lg font-bold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <span className="relative z-10">🔗 View Code</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-4 rounded-2xl text-lg font-bold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 animate-pulse-glow"
                    >
                      <span className="relative z-10">🚀 View Live</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Work;
