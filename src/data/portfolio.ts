import { Project, Experience, Skill, Contact } from '@/types';

export const personalInfo = {
  name: "Prasad Sapkal",
  title: "Full Stack Developer",
  bio: "Passionate full stack developer with expertise in modern web technologies and a love for creating innovative digital solutions.",
  profileImage: "/images/profile/prasad-sapkal.jpeg"
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Education Website Template",
    description: "A modern and responsive school/college website template with clean design and user-friendly interface.",
    technologies: ["MERN", "Next.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],

    liveUrl: "https://siddhivinayak-technolabs-education-website-template.vercel.app",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB4PSIxNzAiIHk9IjEzMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzYzNjZGMSIvPgo8dGV4dCB4PSIzMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVkdTwvdGV4dD4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4K"
  },
  {
    id: "2",
    title: "Shikhsha Sanchalanam Admin Panel",
    description: "A comprehensive school ERP platform with admin panel for managing students, teachers, and academic operations.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Material-UI"],

    liveUrl: "https://shikhsha-sanchalanam-admin.vercel.app",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI2MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiMxMEI5ODEiLz4KPHN2ZyB4PSIxNzAiIHk9IjEwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzEwQjk4MSIvPgo8dGV4dCB4PSIzMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVSUDwvdGV4dD4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4K"
  },
  {
    id: "3",
    title: "Retailer Billing App Dashboard",
    description: "A comprehensive billing and inventory management dashboard for retail businesses with sales tracking and reporting.",
    technologies: ["React", "Chart.js", "Node.js", "Express", "PostgreSQL", "MySQL", "Bootstrap"],

    liveUrl: "https://retailer-billing-dashboard.vercel.app",
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNDAiIGZpbGw9IiNGNTlFMEIiLz4KPHN2ZyB4PSIxNzAiIHk9IjEwMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI0Y1OUUwQiIvPgo8dGV4dCB4PSIzMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJpbGw8L3RleHQ+Cjwvc3ZnPgo8L3N2Zz4KPC9zdmc+Cg=="
  }
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Silent Infotech",
    position: "Assistant Technical Lead",
    duration: "January 2025 - July 2025",
    description: [
      "Assisted and guided team members in development tasks and technical decisions",
      "Contributed to project architecture design for React Native applications",
      "Supported ongoing React.js project architecture with scalable and maintainable solutions"
    ],
    technologies: ["React", "React Native", "Node.js", "AWS", "Docker", "PostgreSQL"]
  },
  {
    id: "2",
    company: "Moltech Solution Pvt. Ltd.",
    position: "Software Developer",
    duration: "May 2022 - November 2024",
    description: [
      "Served as the primary liaison between clients and internal teams, building and maintaining strong, positive relationships to understand their needs and expectations",
      "Facilitated communication between clients and teams to ensure project alignment, translating business requirements into actionable tasks",
      "Schedule and lead regular client meetings to provide updates, address concerns, and gather feedback on project progress",
      "Developed dynamic and interactive web applications using React.js and Context API for state management",
      "Participated in code reviews and provided constructive feedback to peers",
      "Integrated RESTful APIs to fetch and display data dynamically"
    ],
    technologies: ["React", "Context API", "RESTful APIs", ".NET", "MySQL", "Node.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    id: "3",
    company: "SplendorNet Technologies Pvt. Ltd.",
    position: "System Engineer",
    duration: "July 2021 - April 2022",
    description: [
      "Assisted in the development of single-page applications (SPAs) using React.js",
      "Implemented reusable components and front-end libraries to improve code maintainability",
      "Participated in daily stand-ups and sprint planning meetings following Agile methodologies",
      "Debugged and resolved issues reported by QA and users in a timely manner",
      "Integrated RESTful APIs to fetch and display data dynamically"
    ],
    technologies: ["React", "React Native", "Node.js", "JavaScript", "RESTful APIs", "HTML5", "CSS3", "Agile"]
  },
  {
    id: "4",
    company: "R S Construction",
    position: "Trainee Engineer",
    duration: "July 2019 - March 2020",
    description: [
      "Assisted in the development of single-page applications (SPAs) using React.js",
      "Assist in designing, coding and testing software applications under the guidance of senior developers",
      "Work closely with team members to understand project requirements and objectives",
      "Debugged and resolved issues reported by QA and users in a timely manner"
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Testing"]
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Sass"]
  },
  {
    category: "Backend", 
    items: ["Node.js", "Express", ".NET", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Vercel", "Jest"]
  }
];

export const contact: Contact = {
  email: "prasadsapkal18@gmail.com",
  phone: "+91 9834828054",
  github: "https://github.com/96kprasad",
  linkedin: "https://www.linkedin.com/in/prasad-sapkal-3a5253142/",
  website: "https://prasadsapkal.dev"
};