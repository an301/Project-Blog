import React from 'react';
import Button from 'react-bootstrap/Button'; // Importing React-Bootstrap Button

// Importing logos
import pythonLogo from '/src/assets/logos/python.png';
import cssLogo from '/src/assets/logos/css.png';
import htmlLogo from '/src/assets/logos/html.png';
import javaLogo from '/src/assets/logos/java.png';
import jsLogo from '/src/assets/logos/js.png';
import mlLogo from '/src/assets/logos/ml.png';
import sqlLogo from '/src/assets/logos/sql.png';

function AboutMe() {
  const technologies = [
    { name: 'Python', logo: pythonLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'Machine Learning', logo: mlLogo },
  ];

  return (
    <div className="container text-center mt-5" style={{ color: '#9290C3' }}>
      <h1 className="mb-4" style={{ color: '#FFFFFF' }}>About Me</h1>
      <p className="lead">
        Hi, I'm Anish. I'm a freshman studying Computer Science at UC Irvine.
      </p>
      <p className="mt-3">
        I have been coding for over 7 years and have experience in various areas of programming.
      </p>
      <p className="mt-3">
        I'm passionate about AI and Machine Learning and excited to work on projects in these fields.
      </p>
      <p className="mt-3">
        Outside of coding, I enjoy playing basketball and staying active. I also love going on road trips to places like the beach, where I can relax and have fun.
      </p>

      {/* Technologies Section */}
      <div className="mt-5">
        <h2 className="mb-4" style={{ color: '#FFFFFF' }}>Technologies I Work With</h2>
        <ul className="d-flex flex-wrap justify-content-center list-unstyled">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="tech-item text-center"
              style={{
                width: '100px',
                margin: '15px',
                position: 'relative',
                marginBottom: '50px', // Added extra bottom margin 
              }}
            >
              <img
                src={tech.logo}
                alt={`${tech.name} Logo`}
                className="tech-logo"
                style={{
                  width: '80px',
                  height: '80px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.2)';
                  e.target.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
                  const text = e.target.nextSibling;
                  if (text) text.style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                  const text = e.target.nextSibling;
                  if (text) text.style.opacity = 0;
                }}
              />
              <span
                className="tech-text"
                style={{
                  color: '#FFD700',
                  opacity: 0,
                  fontSize: '14px',
                  fontWeight: 'bold',
                  position: 'absolute',
                  top: '105px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  transition: 'opacity 0.3s ease',
                }}
              >
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Information Section */}
      <div className="mt-5">
        <h2 className="mb-4" style={{ color: '#FFFFFF' }}>Contact Me</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <Button
            href="https://github.com/an301"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="mx-2"
          >
            GitHub
          </Button>
          <Button
            href="mailto:anish.nambi@gmail.com"
            variant="secondary"
            className="mx-2"
          >
            Email
          </Button>
          <Button
            href="https://linkedin.com/in/anish-nambirajan"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="mx-2"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
