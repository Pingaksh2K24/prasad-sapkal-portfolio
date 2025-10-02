'use client';

import { useState } from 'react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-indigo-200 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Projects Coming Soon</h3>
              <p className="text-gray-600">Add your projects to showcase your work!</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Enhanced image container */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (project.title.includes('Education')) {
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB4PSIxNzAiIHk9IjEzMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzYzNjZGMSIvPgo8dGV4dCB4PSIzMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVkdTwvdGV4dD4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4K';
                      } else if (project.title.includes('Shikhsha')) {
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI2MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiMxMEI5ODEiLz4KPHN2ZyB4PSIxNzAiIHk9IjEwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzEwQjk4MSIvPgo8dGV4dCB4PSIzMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVSUDwvdGV4dD4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4K';
                      } else if (project.title.includes('Retailer')) {
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNDAiIGZpbGw9IiNGNTlFMEIiLz4KPHN2ZyB4PSIxNzAiIHk9IjEwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI0Y1OUUwQiIvPgo8dGV4dCB4PSIzMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJpbGw8L3RleHQ+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+Cg==';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Enhanced content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Enhanced tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced buttons */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-semibold transition-colors group/link"
                      >
                        <svg className="w-5 h-5 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      index === 1 || index === 2 ? (
                        <button
                          onClick={() => setShowModal(true)}
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </button>
                      ) : (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Demo Not Available</h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Due to some technical reasons, I'm unable to show you the live demo for this project at the moment. However, I'd be happy to give you a personal demonstration along with the complete code structure and architecture.
                </p>
                
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}