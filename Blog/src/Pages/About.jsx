import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About This Blog</h1>

      <p className="about-intro">
        Welcome to <strong>ReactBlog UI</strong> – a simple, fast, and modern blog interface built with React.
        This project is designed to demonstrate clean UI practices, component-based architecture, and dynamic data handling using public APIs.
      </p>

      <h2 className="about-section-title">📌 Project Highlights</h2>
      <ul className="about-list">
        <li>Built with <strong>React</strong> (functional components + hooks)</li>
        <li>Data fetched from <strong>DummyJSON API</strong> using Axios</li>
        <li>Client-side routing with <strong>React Router DOM</strong></li>
        <li>Responsive design with custom <strong>CSS</strong></li>
        <li>Clean card layout for posts and a detailed post view page</li>
      </ul>

      <h2 className="about-section-title">🚀 Purpose of the Project</h2>
      <p className="about-purpose">
        The goal of this blog UI is to simulate a real-world blogging platform where users can:
        browse posts, view individual blog details, and explore an intuitive interface.
        It's great for learning and portfolio building.
      </p>

      <h2 className="about-section-title">👨‍💻 Created By</h2>
      <p className="about-creator">
        This project was created as part of a learning journey in frontend development.
        It focuses on applying modern React practices to build clean, reusable UI components.
      </p>
    </div>
  );
}

export default About;
