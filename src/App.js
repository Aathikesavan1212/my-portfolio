import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import ContactForm from './ContactForm';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <h1 data-aos="fade-down">Hello, I'm AATHIKESAVAN.G 👋</h1>
      <img
        src="/profile.jpeg"
        alt="Aathikesavan"
        className="profile-pic"
        data-aos="zoom-in"
      />

      <h2 data-aos="fade-up">Frontend Developer</h2>
      <p data-aos="fade-up">
        I enjoy building clean and responsive user interfaces using React.
      </p>

      {/* About Section */}
  {/* About Me Section */}
<div className="about-section" data-aos="fade-right">
  <h3>👨‍💻 About Me</h3>
  <div className="about-card">
    <p>
      I’m <strong>Aathikesavan.G</strong>, a passionate <strong>Frontend Developer</strong> with hands-on experience in crafting clean, responsive UIs using <strong>React, JavaScript</strong> and <strong>Tailwind CSS</strong>.
    </p>
    <p>
      During my internship at <strong>Ecran Technology</strong>, I contributed to real-time UI development, building layouts with <strong>HTML</strong> and <strong>CSS</strong> that are both user-friendly and mobile-friendly.
    </p>
    <p>
      I'm always eager to learn new tech, enhance my skills, and collaborate on exciting web projects.
    </p>
  </div>
</div>


      {/* Projects Section */}
      <div className="projects-section" data-aos="fade-left">
        <h3>Projects</h3>
        <div className="project-cards">
          <div className="project-card dark-card">
            <h4>Passport Automation System</h4>
            <p>
              Developed a responsive front-end using HTML and CSS for passport services.
              Focused on user-friendly UI and structured layout for efficient data flow.
            </p>
          </div>
          <div className="project-card dark-card">
            <h4>Personal Portfolio Website</h4>
            <p>
              Designed and deployed a responsive portfolio using React, Vite, and Vercel.
              Includes contact form (EmailJS), GitHub, LinkedIn, and resume download.
            </p>
          </div>
        </div>
      </div>

      
      {/* Certifications Section */}
<div className="certificates-section" data-aos="fade-up">
  <h3>🎓 Certifications</h3>
  <div className="cert-cards">
    <div className="cert-card">
      <h4>Python Programming</h4>
      <p>UST – Coursera</p>
    </div>
    <div className="cert-card">
      <h4>Introduction to IoT Boards</h4>
      <p>Coursera</p>
    </div>
    <div className="cert-card">
      <h4>Overview of Data Visualization</h4>
      <p>Coursera</p>
    </div>
    <div className="cert-card">
      <h4>Quiz Competition Winner</h4>
      <p>Inter-College Level</p>
    </div>
  </div>
</div>


      {/* Contact Section */}
      {/* Skills Section */}
<div className="skills-section" data-aos="fade-right">
  <h3>Skills</h3>
  <div className="skills-grid">
    <div className="skill-card">⚛️ React</div>
    <div className="skill-card">💻 JavaScript</div>
    <div className="skill-card">🎨 HTML & CSS</div>
    <div className="skill-card">🌬️ Tailwind CSS</div>
    <div className="skill-card">🧪 Git & GitHub</div>
    <div className="skill-card">📦 Firebase</div>
    <div className="skill-card">📱 Responsive Design</div>
    <div className="skill-card">🚀 Deployment (Vercel)</div>
  </div>
</div>

     {/* Contact Me Section */}
<div className="contact-section" data-aos="fade-up">
  <h3>📬 Contact Me</h3>
  <div className="contact-card">
    <p><strong>Email:</strong> <a href="mailto:aathikesavan122@gmail.com">aathikesavan122@gmail.com</a></p>
    <p><strong>Phone:</strong> 9080631697</p>
    <p><strong>GitHub:</strong> <a href="https://github.com/Aathikesavan1212" target="_blank" rel="noreferrer">github.com/Aathikesavan1212</a></p>
    <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/aathi-kesavan-917600265" target="_blank" rel="noreferrer">linkedin.com/in/aathi-kesavan</a></p>

    <a
      href="/Aathikesavan_Professional_Resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="resume-btn"
    >
      📄 viwe resume
    </a>
  </div>
</div>


      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}

export default App;
