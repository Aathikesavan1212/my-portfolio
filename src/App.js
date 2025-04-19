import './App.css';
import { useEffect } from 'react'; // ✅ Add this
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      <div className="about-section" data-aos="fade-right">
        <h3>About Me</h3>
        <p>
          I'm an aspiring frontend developer with strong skills in React, JavaScript, and Tailwind CSS.
          I completed a 2-month internship at Oramate Technology, where I worked on UI development using HTML and CSS.
          I enjoy building clean, responsive web designs and learning new technologies.
        </p>
      </div>

      {/* Projects Section */}
      <div className="projects-section" data-aos="fade-left">
        <h3>Projects</h3>
        <div className="project-card">
          <h4>Passport Automation System</h4>
          <p>
            Developed a responsive front-end using HTML and CSS for passport services.
            Focused on user-friendly UI and structured layout for efficient data flow.
          </p>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="certificates-section" data-aos="fade-up">
        <h3>Certifications</h3>
        <ul>
          <li>Python Programming – UST Coursera</li>
          <li>Introduction to IoT Boards – Coursera</li>
          <li>Overview of Data Visualization – Coursera</li>
          <li>Inter-College Quiz Competition Winner</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-section" data-aos="fade-up">
        <h3>Contact Me</h3>
        <p>Email: aathikesavan122@gmail.com</p>
        <p>Phone: 9080631697</p>
        <p>
          <a href="https://github.com/Aathikesavan1212" target="_blank" rel="noreferrer">GitHub</a> |{" "}
          <a href="https://linkedin.com/in/aathi-kesavan-917600265" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
        <a
          href="/Aathikesavan_Professional_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          📄 View Resume
        </a>
      </div>
    </div>
  );
}

export default App;
