import { personalInfo, contact, skills } from '@/data/portfolio';
import { HomeIcon, UserIcon, RocketLaunchIcon, BriefcaseIcon, EnvelopeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-5 animate-pulse blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-5 animate-pulse delay-1000 blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full opacity-5 animate-pulse delay-500 blur-xl"></div>
        <div className="absolute top-20 right-1/4 w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-5 animate-pulse delay-700 blur-xl"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* About Section - Enhanced */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-xl text-blue-400 font-medium mb-6">
                {personalInfo.title}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Passionate about creating innovative digital solutions and bringing ideas to life through code. 
                Always learning, always building, always pushing the boundaries of what's possible.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <div className="w-8 h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Skills Preview */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 2).map((skillGroup) => 
                  skillGroup.items.slice(0, 4).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600 hover:border-blue-500 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))
                )}
                <span className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 px-3 py-1.5 rounded-full text-sm border border-gray-600 hover:border-blue-500 transition-colors duration-300">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links - Enhanced */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Quick Links
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Home', href: '#home', Icon: HomeIcon },
                { name: 'About', href: '#about', Icon: UserIcon },
                { name: 'Projects', href: '#projects', Icon: RocketLaunchIcon },
                { name: 'Experience', href: '#experience', Icon: BriefcaseIcon },
                { name: 'Contact', href: '#contact', Icon: EnvelopeIcon }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2"
                >
                  <link.Icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white">{link.name}</span>
                  <ChevronRightIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Info - Enhanced */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get In Touch
            </h4>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Social Links */}
              <div>
                <p className="text-gray-400 text-sm mb-3">Follow Me</p>
                <div className="flex space-x-3">
                  {contact.github && (
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="group relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center group-hover:from-gray-700 group-hover:to-gray-600 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                        <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">GitHub</div>
                    </a>
                  )}
                  
                  {contact.linkedin && (
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-400 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</div>
                    </a>
                  )}
                  
                  <a href={`https://wa.me/919834828054`} target="_blank" rel="noopener noreferrer" className="group relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-xl flex items-center justify-center group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Bottom Section */}
        <div className="border-t border-gradient-to-r from-transparent via-gray-700 to-transparent pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for work
                </span>
                <span>•</span>
                <span>Made in India 🇮🇳</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>Crafted with passion and modern web technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}