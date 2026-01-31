import type { Experience } from "@/app/types";

export const experiences: Experience[] = [
  {
    id: "senior-swe",
    type: "work",
    role: "Senior Software Engineer",
    company: "TechCorp Innovation",
    location: "San Francisco, CA",
    duration: "2 years",
    startDate: "2024-01",
    endDate: "Present",
    description:
      "Leading development of cloud-native applications and mentoring junior developers. Spearheading the migration of legacy systems to modern microservices architecture.",
    highlights: [
      "Led team of 5 engineers",
      "Reduced deployment time by 60%",
      "Implemented CI/CD pipelines",
      "Architected microservices platform",
    ],
  },
  {
    id: "fullstack-dev",
    type: "work",
    role: "Full Stack Developer",
    company: "StartupHub",
    location: "Remote",
    duration: "2 years",
    startDate: "2022-01",
    endDate: "2023-12",
    description:
      "Built and maintained multiple web applications from scratch. Worked closely with product and design teams to deliver exceptional user experiences.",
    highlights: [
      "Developed 3 production apps",
      "Increased performance by 40%",
      "Implemented real-time features",
      "Built REST & GraphQL APIs",
    ],
  },
  {
    id: "software-engineer",
    type: "work",
    role: "Software Engineer",
    company: "Digital Solutions Inc.",
    location: "New York, NY",
    duration: "2 years",
    startDate: "2020-06",
    endDate: "2021-12",
    description:
      "Contributed to enterprise software solutions, focusing on backend development and database optimization. Collaborated in an Agile environment.",
    highlights: [
      "Optimized database queries",
      "Reduced API latency by 50%",
      "Wrote comprehensive tests",
      "Documented system architecture",
    ],
  },
  {
    id: "masters",
    type: "education",
    role: "Master of Science in Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    duration: "2 years",
    startDate: "2018-09",
    endDate: "2020-05",
    description:
      "Specialized in Distributed Systems and Machine Learning. Completed thesis on 'Optimizing Microservices Communication in Cloud Environments'.",
    highlights: [
      "GPA: 3.9/4.0",
      "Research Assistant",
      "Published 2 papers",
      "Dean's List",
    ],
  },
  {
    id: "bachelors",
    type: "education",
    role: "Bachelor of Science in Computer Science",
    company: "UC Berkeley",
    location: "Berkeley, CA",
    duration: "4 years",
    startDate: "2014-09",
    endDate: "2018-05",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles. Active member of the Computer Science Student Association.",
    highlights: [
      "GPA: 3.8/4.0",
      "Summa Cum Laude",
      "Hackathon Winner",
      "CS Tutor",
    ],
  },
];
