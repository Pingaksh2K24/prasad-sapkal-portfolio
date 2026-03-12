'use client';

import { skills } from '@/data/portfolio';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-white dark:from-gray-900 via-blue-50 dark:via-gray-800 to-indigo-50 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-blue-800 dark:via-blue-400 to-purple-800 dark:to-purple-400 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate software developer with a love for creating
            innovative solutions and bringing ideas to life through code.
          </p>
        </div>

        {/* Single Combined Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Journey Section */}
            <div className="mb-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 dark:from-white to-blue-800 dark:to-blue-400 bg-clip-text text-transparent">
                  My Journey
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey in software development began with a strong
                  curiosity for building interactive and scalable digital
                  products. Over the past 5+ years, I have worked as a Frontend
                  Developer, building responsive web applications and mobile
                  solutions for different industries. During this time, I have
                  gained deep expertise in modern JavaScript frameworks,
                  especially React.js and Next.js, while also working with
                  backend technologies and database systems.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I started my professional career as a System Engineer, where I
                  developed a strong foundation in software development and
                  problem-solving. With continuous learning and hands-on project
                  experience, I progressed to the role of Senior Software
                  Developer, taking on more responsibility in designing scalable
                  applications, improving performance, and following modern
                  development best practices.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Throughout my career, I have enjoyed working in collaborative
                  environments, interacting with clients, and working closely
                  with cross-functional teams to deliver high-quality products.
                  I believe in continuous learning and knowledge sharing, which
                  helps me stay updated with new technologies and contribute
                  effectively to the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-10 pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">9+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 dark:from-white to-blue-800 dark:to-blue-400 bg-clip-text text-transparent">
                  Skills & Technologies
                </h3>
              </div>

              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gradient-to-r from-blue-50 dark:from-blue-900/30 to-indigo-50 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800 hover:from-blue-100 dark:hover:from-blue-900/50 hover:to-indigo-100 dark:hover:to-indigo-900/50 transition-all duration-300 transform hover:scale-105 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
