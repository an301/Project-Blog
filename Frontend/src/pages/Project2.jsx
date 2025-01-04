// importing React 
import React from 'react';
// importing Bootstrap Button
import Button from 'react-bootstrap/Button';

// images for screenshots for the project
import recordImage from '/src/assets/voiceeditor_pics/record.png';
import uploadImage from '/src/assets/voiceeditor_pics/upload.png';
import outputImage from '/src/assets/voiceeditor_pics/output.png';

// Project2 section
function Project2() {
  return (
    // main container
    <div className="container text-center mt-5">
      {/* Title of the project */}
      <h1 className="mb-4">Voice-Based Code Editor</h1>
      {/* Intro paragraph for the project */}
      <p className="mt-3">
        The Voice-Based Code Editor provides an innovative way to code using voice commands. It converts spoken Python instructions into executable code, offering a hands-free coding experience.
      </p>

      {/* explanation of how it works */}
      <h2 className="mt-5">How It Works</h2>
      <ul className="key-features list-unstyled" style={{ color: '#F5E65A' }}>
        <li> Converts speech to Python code using the <strong>speech_recognition</strong> library and Google Speech API.</li>
        <li> Supports spoken commands for symbols such as forward slash (/) or semicolon (;).</li>
        <li> Displays the generated code and its output after processing the voice input.</li>
      </ul>

      {/* steps to properly download and use the project */}
      <h2 className="mt-5">Usage</h2>
      <ol className="usage-steps list-unstyled text-start">
        <li>
          <strong>Step 1:</strong> Install the necessary dependencies:
          <ul>
            <li><strong>flask</strong></li>
            <li><strong>speech_recognition</strong></li>
            <li><strong>subprocess</strong></li>
          </ul>
        </li>
        <li>
          <strong>Step 2:</strong> Run the application:
          <ul>
            <li>Start the Flask server by executing <code>app.py</code>.</li>
            <li>Navigate to the <strong>audio test page</strong>.</li>
          </ul>
        </li>
        <li>
          <strong>Step 3:</strong> Record and process:
          <ul>
            <li>Click <strong>Record</strong> to start capturing your voice commands.</li>
            <li>After speaking, click <strong>Stop</strong> and then <strong>Upload</strong> to process the input.</li>
            <li>The generated Python code and its output will be displayed.</li>
          </ul>
        </li>
        
      </ol>

      {/* Screenshots of the project */}
      <h2 className="mt-5">Screenshots</h2>
      <div className="image-block mt-4">
        <img src={recordImage} alt="Recording Interface" className="project-image-large" />
        <p className="screenshot-caption">Start, Pause, and Stop Recording</p>
      </div>
      <div className="image-block mt-4">
        <img src={uploadImage} alt="Upload Button" className="project-image-large" />
        <p className="screenshot-caption">Upload Recorded Code</p>
      </div>
      <div className="image-block mt-4">
        <img src={outputImage} alt="Output Display" className="project-image-large" />
        <p className="screenshot-caption">Code and Output Display</p>
      </div>

      {/* future considerations and improvements for the project section*/}
      <h2 className="mt-5">Future Considerations</h2>
      <ul className="key-features list-unstyled">
        <li> Enhance multi-line code block support for more complex tasks.</li>
        <li> Secure sandbox environment for safe execution of Python code.</li>
        <li> Real-time feedback and live error checking during dictation.</li>
        <li> Support for additional languages.</li>
      </ul>

      {/* Technologies used for the project section */}
      <h2 className="mt-5">Technologies Used</h2>
      <p className="mt-3" style={{ color: '#F5E65A' }}>
        Flask, speech_recognition, Google Speech API, Python, HTML, CSS, JavaScript
      </p>

      {/* button that takes you to the github repo for the project */}
      <div className="mt-5">
        <Button
          href="https://github.com/an301/voice-based-code-editor"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
        >
          View on GitHub
        </Button>
      </div>
    </div>
  );
}

// Export 
export default Project2;
