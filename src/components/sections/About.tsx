import { skills } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software developer with a love for creating innovative solutions 
            and bringing ideas to life through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-4">
              With years of experience in software development, I've worked on various projects 
              ranging from web applications to mobile apps. I enjoy solving complex problems 
              and learning new technologies.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
    </section>
  );
}