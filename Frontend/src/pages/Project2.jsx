import React from 'react';

// Importing placeholder images
import recordImage from '/src/assets/voiceeditor_pics/record.png';
import uploadImage from '/src/assets/voiceeditor_pics/upload.png';
import outputImage from '/src/assets/voiceeditor_pics/output.png';

function Project2() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Voice-Based Code Editor</h1>
      <p className="mt-3">
        The Voice-Based Code Editor provides an innovative way to code using voice commands. It converts spoken Python instructions into executable code, offering a hands-free coding experience.
      </p>

      <h2 className="mt-5">How It Works</h2>
      <ul className="key-features list-unstyled" style={{ color: '#F5E65A' }}>
        <li>- Converts speech to Python code using the <strong>speech_recognition</strong> library and Google Speech API.</li>
        <li>- Supports spoken commands for symbols such as "open parentheses" or "semicolon."</li>
        <li>- Displays the generated code and its output after processing the voice input.</li>
      </ul>

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
        <li>
          <strong>Step 4:</strong> Explore further:
          <ul>
            <li>Supports single-line Python commands with plans for multi-line support in the future.</li>
            <li>Expanding to support additional languages and improve execution for more complex Python code.</li>
          </ul>
        </li>
      </ol>

      <h2 className="mt-5">Screenshots</h2>
      <div className="image-block mt-4">
        <img src={recordImage} alt="Recording Interface" className="project-image-large" />
        <p className="screenshot-caption">Start, Pause, and Stop Recording</p>
      </div>
      <div className="image-block mt-4">
        <img src={uploadImage} alt="Upload Button" className="project-image-large" />
        <p className="screenshot-caption">Upload Recorded Command</p>
      </div>
      <div className="image-block mt-4">
        <img src={outputImage} alt="Output Display" className="project-image-large" />
        <p className="screenshot-caption">Code and Output Display</p>
      </div>

      <h2 className="mt-5">Future Considerations</h2>
      <ul className="key-features list-unstyled">
        <li>- Enhance multi-line code block support for more complex tasks.</li>
        <li>- Secure sandbox environment for safe execution of Python code.</li>
        <li>- Real-time feedback and live error checking during dictation.</li>
        <li>- Support for additional languages.</li>
      </ul>

      <div className="mt-5">
        <a
          href="https://github.com/an301/voice-based-code-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mx-2"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default Project2;
