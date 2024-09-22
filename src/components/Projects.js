import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: 'Bank Transaction Manager',
      description: 'Designed a React-based financial transaction manager, featuring real-time filtering and search functionality. Optimized state management using React hooks, leading to a 20% improvement in rendering speed. Implemented JSON DB server integration for persistent data storage.',
      technologies: 'React, JSON DB, Hooks',
      link: 'https://github.com/Mwaurasammy/Bank-of-Flatiron.git',
    },
    {
      title: 'Subscription Management System (Collaborative Project)',
      description: 'Contributed to UX and UI design, ensuring a seamless and user-friendly experience. Implemented authentication features using Firebase Authentication, improving security for over 500 users.',
      technologies: 'React, UX/UI, JSON',
      link: 'https://subscriptly4u.netlify.app/landing',
    },
    {
      title: 'Coffee Shop Domain (CLI App)',
      description: 'Created a Python-based CLI tool for managing coffee shop orders and inventory tracking. Automated daily order reports and inventory updates, reducing manual data entry by 50%.',
      technologies: 'Python, CLI',
      link: 'https://github.com/Mwaurasammy/Coffee-Shop-Object-Relationships-.git',
    },
    {
      title: 'Job Application Manager (CLI App)',
      description: 'Built a CLI tool to assist job seekers in tracking applications, with functionality for adding, searching, and updating job statuses. Improved personal job management processes, enabling quicker decision-making in application follow-ups.',
      technologies: 'Python, CLI',
      link: 'https://github.com/Mwaurasammy/job_app_manager.git',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>/ Projects</h2>
      <p>Available on GitHub</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icons">
              <FontAwesomeIcon icon={faFolderOpen} className="folder-icon" />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
              </a>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p>{project.description}</p>
            <p className="technologies">{project.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
