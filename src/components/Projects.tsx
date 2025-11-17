import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Social from '../assets/Socialmedia.png';
import Luna from '../assets/Luna.png';
import Bazzarway from '../assets/Bazzarway.png';
import Admin from '../assets/Admin.png';
const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "IMS - Inventory Management System",
      description:
        "A complete inventory solution where admin can manage customers, employees, branches & billing.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1170&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "fullstack",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/RajCoder9931/Ims",
    },
    {
      id: 2,
      title: "Task Notifier Web App",
      description:
        "A Trello-style drag-and-drop task manager built with Firebase storage.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1332&q=80",
      technologies: ["React", "TypeScript", "Firebase"],
      category: "frontend",
      demoUrl: "https://tasknotify.netlify.app/",
      githubUrl: "https://github.com/RajCoder9931/Task-Notifyer",
    },
    {
      id: 3,
      title: "Quiz Web App",
      description:
        "A responsive quiz application with scoring and random questions.",
      image:
        "https://images.unsplash.com/photo-1611746869696-d09bce200020?auto=format&fit=crop&w=1170&q=80",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      demoUrl: "https://learnandearnquiz.netlify.app/",
      githubUrl: "https://github.com/RajCoder9931/Quiz-app",
    },
    {
      id: 4,
      title: "Job Board Platform",
      description:
        "A full-stack job portal where employers post jobs and users can apply.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1170&q=80",
      technologies: ["React", "CSS", "JavaScript", "MongoDB", "Bootstrap"],
      category: "fullstack",
      demoUrl: "https://jobboard-jfgj.onrender.com/",
      githubUrl: "https://github.com/RajCoder9931/Job-Board",
    },
    {
      id: 5,
      title: "Admin Dashboard (Under Development)",
      description:
        "A dashboard to manage sales, purchases, inventory, and employees with live analytics.",
      image: Admin,
      technologies: ["React", "CSS", "JavaScript", "MongoDB", "Bootstrap"],
      category: "frontend",
      demoUrl: "https://admin-dashboard-three-omega.vercel.app/dashboard",
      githubUrl: "https://github.com/RajCoder9931/Admin-Dashboard",
    },
    {
      id: 6,
      title: "Social Media WebApp",
      description:
        "A pet-focused social media app with real-time chat, posts, and user profiles.",
      image:Social,
      technologies: ["React", "Tailwind", "Express", "Firebase", "MongoDB"],
      category: "fullstack",
      demoUrl: "",
      githubUrl: "",
    },
    {
      id: 7,
      title: "Luna E-Commerce Admin Panel",
      description:
        "An admin panel for managing products, orders, and payments with API sync.",
      image:Luna,
      technologies: ["React", "Node", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      demoUrl: "",
      githubUrl: "",
    },
    {
      id: 8,
      title: "BazaarWay Multi-Role E-Commerce System",
      description:
        "Backend system with Super Admin, Vendor & Sub-vendor panels, JWT auth & product APIs.",
      image:
      Bazzarway,
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Firebase"],
      category: "backend",
      demoUrl: "",
      githubUrl: "",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-slate-800">My Projects</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-2 flex-wrap">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm capitalize transition ${
                  filter === category
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
