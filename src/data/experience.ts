export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech?: string[];
}


export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Barclays",
    duration: "Aug 2026 - Present",
    description: "Just started :)",
    // tech: [""]
  },
  // {
  //   role: "Cyber Operations Day",
  //   company: "BNY",
  //   duration: "Oct 2025",
  //   description: `Practiced the full incident response cycle: detection, containment, eradication, communication, and recovery. Developed a contingency plan and coordinated recovery strategies across internal and external teams during a live cyberattack simulation.
  //   Studied custody structures supporting over $50 trillion in client assets, plus asset protection practices covering segregation, reconciliation, and compliance with CASS rules and the FCA Handbook`,
  //   // tech: ["TypeScript", "Next.js"]
  // },
  {
    role: "Software Engineer Intern",
    company: "Barclays",
    duration: "Jun 2025 - Aug 2025]",
    description: "Built a DevEx dashboard analysing performance metrics across 60 engineering teams, integrating Bitbucket and GitLab APIs to analyse merge request cycle times and release frequency. Cut API retrieval time by 97% by replacing sequential calls with multithreaded, async processing, and resolved rate limiting issues through batch processing. Presented the project to technical directors and stakeholders during prototype demos.",
    tech: ["React", "Redux", "Spring Boot", "REST APIs", "Java", "GraphQL"]
  },
  {
    role: "Software Engineer Intern",
    company: "Jaguar Land Rover",
    duration: "Jul 2024 - Jun 2025",
    description: "Designed and implemented safety critical mechanisms on the System Basis Chip for next-gen battery modules, ensuring compliance with ASIL-D safety standards. Diagnosed and resolved hardware/software faults using Hardware-in-the-Loop testing, and refactored legacy code to fix critical startup initialisation issues. Led a MATLAB/Simulink automation project that improved signal generation efficiency by 40%, and presented work directly to department leadership.",
    tech: ["C", "Python", "MATLAB", "Simulink", "Trace32", "EB Tresos"]
  },
  {
    role: "Lead Backend Developer",
    company: "Pathfinders (U17 Driving Charity App)",
    duration: "Sep 2023 - Jun 2024",
    description: "Led the backend team building a platform for students and instructors to track driving progress, replacing manual paperwork with automated workflows. Designed a normalised MySQL database on AWS and used SQL triggers to automate student-instructor allocation. Ran biweekly client meetings to align features and enforced data security measures to protect sensitive information.",
    tech: ["Python", "MySQL", "AWS EC2", "React", "SQL"]
  },
];