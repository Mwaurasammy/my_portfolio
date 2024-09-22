import React from 'react';
import './About.css';
import meImage from '../assets/me.png';  // adjust the relative path





const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>/ about me</h2>
          <p>
            I am a <strong>Software Engineer</strong>,
            with a diploma in Information Technology, multiple certifications and undertaking a  
            <strong> Certificate in Software Engineering</strong> at <span className="highlight">Moringa School</span>.
          </p>
          <p>Here are some technologies I have been working with:</p>
          <ul className="tech-list">
            <li>▶ Typescript</li>
            <li>▶ React.js</li>
            <li>▶ Javascript ES6+</li>
            <li>▶ Python</li>
            <li>▶ Java</li>
            <li>▶ C#</li>
          </ul>
          <p>
            Outside of work, I’m interested in machine learning.
            I also play a lot of video games. And cosplay.
          </p>
        </div>
        <div className="about-image">
          <img src={meImage} alt='sammy mwaura' />
        </div>
      </div>
    </section>
  );
};

export default About;
