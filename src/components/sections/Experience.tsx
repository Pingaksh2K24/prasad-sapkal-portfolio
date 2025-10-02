import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-indigo-200 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey and the experiences that have shaped my career.
          </p>
        </div>

        {experience.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Experience Coming Soon</h3>
              <p className="text-gray-600">Add your work experience to showcase your career journey!</p>
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="relative group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Experience card */}
                  <div className="md:ml-16 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            <p className="text-xl text-blue-600 font-semibold">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full font-semibold border border-blue-100">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {exp.description.map((item, index) => (
                            <li key={index} className="text-gray-600 flex items-start leading-relaxed">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}