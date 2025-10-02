'use client';

import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="mb-12">
          {/* Passport size profile image */}
          <div className="relative w-32 h-40 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-lg opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-lg bg-white shadow-2xl overflow-hidden border-4 border-white">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDgiIHI9IjIwIiBmaWxsPSIjOUI5QkEzIi8+CjxwYXRoIGQ9Ik0zMiA5NkMzMiA4MC41MzYgNDcuNTM2IDY4IDY0IDY4Qzc5LjQ2NCA2OCA5NiA4MC41MzYgOTYgOTZWMTI4SDMyVjk2WiIgZmlsbD0iIzlCOUJBMyIvPgo8L3N2Zz4K';
                }}
              />
            </div>
          </div>
          
          {/* Enhanced typography with gradient text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
          
          {/* Enhanced buttons with better styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="group border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}