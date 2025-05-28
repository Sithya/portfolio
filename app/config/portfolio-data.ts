// 🎯 EASY CUSTOMIZATION FILE
// Edit this file to update all your portfolio content easily!

import { GraduationCap, Code, Coffee, Briefcase, Award, Globe, Server, Database, GitBranch, Cloud } from "lucide-react"

export const personalInfo = {
  name: "Alex Johnson",
  title: "Aspiring Software Engineer",
  bio: "Computer Science student passionate about creating innovative solutions and building the future through code. Specializing in full-stack development and modern web technologies.",
  location: "San Francisco, CA",
  email: "alex.johnson@email.com",
  phone: "+1 (555) 123-4567",

  // Social Links - Update these with your actual profiles
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    telegram: "https://t.me/yourusername",
    facebook: "https://facebook.com/yourusername",
    email: "mailto:alex.johnson@email.com",
  },

  // Images - Replace these with your actual images
  images: {
    hero: "/placeholder.svg?height=400&width=400&query=professional headshot of a computer science student smiling",
    about: "/placeholder.svg?height=400&width=400&query=professional headshot of a computer science student",
  },

  // CV Download - Replace with your actual CV file
  cvUrl: "/cv/Alex_Johnson_CV.pdf", // Place your CV in the public/cv/ folder
}

export const aboutMe = {
  description: [
    "I'm a third-year Computer Science student at Tech University with a passion for full-stack development and emerging technologies. My journey in programming started with curiosity and has evolved into a deep love for creating solutions that make a difference.",
    "When I'm not coding, you can find me contributing to open-source projects, participating in hackathons, or exploring the latest in AI and machine learning. I believe in continuous learning and staying ahead of the technology curve.",
  ],

  stats: [
    { label: "Years of Study", value: "3+", icon: GraduationCap },
    { label: "Projects Completed", value: "25+", icon: Code },
    { label: "Cups of Coffee", value: "∞", icon: Coffee },
  ],

  // Add or remove skills as needed
  keySkills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Git",
    "Linux",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Next.js",
  ],
}

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400&query=modern e-commerce website interface",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://your-ecommerce-demo.com",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI integration using OpenAI API. Built with Next.js and Socket.io for seamless communication.",
    image: "/placeholder.svg?height=300&width=400&query=AI chat application interface",
    tech: ["Next.js", "OpenAI API", "Socket.io", "MongoDB", "TypeScript"],
    github: "https://github.com/yourusername/ai-chat-app",
    demo: "https://your-chat-demo.com",
    featured: true,
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400&query=task management dashboard",
    tech: ["Vue.js", "Express.js", "MySQL", "WebSocket", "Docker"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://your-task-demo.com",
    featured: false,
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "Data visualization dashboard showing weather patterns and analytics using Chart.js and external weather APIs.",
    image: "/placeholder.svg?height=300&width=400&query=weather analytics dashboard",
    tech: ["React", "Chart.js", "Weather API", "Material-UI", "Python"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://your-weather-demo.com",
    featured: false,
  },
  {
    title: "Blockchain Voting System",
    description:
      "Secure voting application built on Ethereum blockchain ensuring transparency and immutability of votes.",
    image: "/placeholder.svg?height=300&width=400&query=blockchain voting interface",
    tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
    github: "https://github.com/yourusername/blockchain-voting",
    demo: "https://your-voting-demo.com",
    featured: false,
  },
  {
    title: "Mobile Fitness Tracker",
    description:
      "React Native mobile app for tracking workouts, nutrition, and fitness goals with social sharing features.",
    image: "/placeholder.svg?height=300&width=400&query=mobile fitness app interface",
    tech: ["React Native", "Firebase", "Redux", "Expo", "Chart.js"],
    github: "https://github.com/yourusername/fitness-tracker",
    demo: "https://your-fitness-demo.com",
    featured: false,
  },
]

export const skills = {
  categories: [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Python", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "NestJS", level: 80 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Linux", level: 85 },
        { name: "Jest/Testing", level: 78 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ],

  technologies: [
    { name: "JavaScript", icon: Code, color: "text-yellow-500" },
    { name: "Python", icon: Code, color: "text-blue-500" },
    { name: "React", icon: Globe, color: "text-cyan-500" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-600" },
    { name: "Docker", icon: Cloud, color: "text-blue-400" },
    { name: "AWS", icon: Cloud, color: "text-orange-500" },
    { name: "Git", icon: GitBranch, color: "text-red-500" },
  ],
}

export const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Computer Science",
    organization: "Tech University",
    location: "San Francisco, CA",
    date: "2022 - Present",
    description:
      "Pursuing a Bachelor's degree in Computer Science with a focus on software engineering and artificial intelligence. Current GPA: 3.8/4.0",
    achievements: ["Dean's List (3 semesters)", "CS Department Scholarship", "Teaching Assistant for Data Structures"],
  },
  {
    type: "internship",
    icon: Briefcase,
    title: "Software Engineering Intern",
    organization: "TechCorp Solutions",
    location: "Remote",
    date: "Summer 2024",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes.",
    achievements: [
      "Improved app performance by 25%",
      "Implemented 3 major features",
      "Received excellent performance review",
    ],
  },
  {
    type: "achievement",
    icon: Award,
    title: "Hackathon Winner",
    organization: "CodeFest 2024",
    location: "San Francisco, CA",
    date: "March 2024",
    description:
      "Led a team of 4 developers to create an AI-powered study assistant. Won first place out of 150+ teams.",
    achievements: ["$5,000 prize money", "Mentorship opportunity", "Featured in tech blog"],
  },
  {
    type: "internship",
    icon: Briefcase,
    title: "Frontend Developer Intern",
    organization: "StartupXYZ",
    location: "San Jose, CA",
    date: "Summer 2023",
    description:
      "Built responsive web interfaces and improved user experience for the company's main product. Worked closely with the design team.",
    achievements: [
      "Reduced page load time by 40%",
      "Implemented mobile-first design",
      "Contributed to 15+ UI components",
    ],
  },
  {
    type: "achievement",
    icon: Award,
    title: "Open Source Contributor",
    organization: "Various Projects",
    location: "Remote",
    date: "2023 - Present",
    description: "Active contributor to open-source projects including React libraries and developer tools.",
    achievements: ["50+ contributions", "3 featured PRs", "Maintainer of 2 projects"],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "High School Diploma",
    organization: "Central High School",
    location: "Oakland, CA",
    date: "2018 - 2022",
    description: "Graduated with honors. President of Computer Science Club and captain of the programming team.",
    achievements: ["Valedictorian", "National Merit Scholar", "State Programming Competition - 2nd Place"],
  },
]
